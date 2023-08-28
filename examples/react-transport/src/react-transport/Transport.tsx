import React, {HTMLAttributes, useEffect, useRef, useState} from "react"
import ReactDOM from "react-dom"
import {useTransports} from "./transportContext"

type Props = HTMLAttributes<HTMLDivElement> & {
    id: string
    children?: React.ReactNode
}

export function Transport({children, id,  ...divAttrs}: Props) {
    const [container, setContainer] = useState<HTMLDivElement>()
    const {groups, register, unregister} = useTransports()
    const groupsRef = useRef({
        groups,
        register,
        unregister
    })
    useEffect(() => {
        const {groups, register, unregister } = groupsRef.current
        if (!container || groups.get(id) === container) return
        register(id, container)
        return () => {
            unregister(id)
        }
    }, [id, container])


    return <div {...divAttrs} id={id} ref={(el) => {
        if (!el) return

        setContainer(el)
    }
    }>
        {container && ReactDOM.createPortal(children, container)}
    </div>
}
