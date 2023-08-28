import React, {useState} from "react";
import {context} from "./transportContext"

type Props = {
    children: React.ReactNode
}

// group name => container
// container => parentNode

export function TransportProvider({children}: Props) {
    const [groups, setGroups] = useState<Map<string, HTMLElement>>(new Map())
    const [actives, setActives] = useState(new Set<string>())
    const register = (id: string, container: HTMLElement) => {
        setGroups(groups => {
            if (groups.has(id)) return groups
            else {
                groups.set(id, container)
            }
            return new Map(groups)
        })

    }
    const unregister = (id: string) => {
        setGroups(groups => {
            if (!groups.has(id)) return groups
            else {
                groups.delete(id)
            }
            return new Map(groups)
        })
    }
    // from node contains the real content
    // to node is anchored
    const swapNode = (from: string, to: string) => {
        if (!groups.has(from) || !groups.has(to)) return
        const toNode = groups.get(to)!
        const fromNode = groups.get(from)!

        if (!toNode.parentNode || !fromNode.parentNode) return

        /**
         * replaceChild(newNode, oldNode) -> oldNode, newNode不能是已经渲染的Node，需要先remove
         * 因此，可以创建一个swapNode逐个替换出来，避免不断更新已保存的container
         * */
        const swapNode = document.createElement("div")
        const availableFromNode = fromNode.parentNode.replaceChild(swapNode, fromNode)
        const availableToNode = toNode.parentNode.replaceChild(availableFromNode, toNode)

        swapNode.parentNode!.replaceChild(availableToNode, swapNode)

        setActives(actives => {
            actives.delete(from)
            actives.add(to)
            return new Set(actives)
        })
    }
    return <context.Provider value={{actives, groups, register, unregister, swapNode}}>
        {children}
    </context.Provider>
}

