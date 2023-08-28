import {createContext, useContext} from "react";

export type TransportApis = {
    pull: () => void
}
type ContextState = {
    groups: Map<string, HTMLElement>
    register: (id: string, container: HTMLElement) => void
    unregister: (id: string) => void
    swapNode: (from: string, to: string) => void
    actives: Set<string>

}
export const context = createContext({} as ContextState)

export const useTransports = () => useContext(context)
