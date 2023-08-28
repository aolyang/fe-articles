import {useState} from "react"

import {Transport} from "./react-transport/Transport";
import {useTransports} from "./react-transport/transportContext";

export default function App() {
    const [num, setNum] = useState(0)
    const {swapNode} = useTransports()
    const next = (num + 1) % 2
    const handleTransport = () => {
        if (next === 0) {
            swapNode(`port-${next}`, `port-${num}`)
        } else {
            swapNode(`port-0`, `port-${next}`)
        }
        setNum(next)
    }
    return <div className={"content-root"}>
        <button onClick={handleTransport}>transport from {num} to {next}</button>
        <div className={"box-a"}>
            <Transport id={"port-0"}>
                <FirstRenderTarget/>
            </Transport>
        </div>
        <div className={"box-b"}>
            <Transport id={"port-1"}></Transport>
        </div>
    </div>
}

function FirstRenderTarget() {
    const [num, setNum] = useState(0)
    return <div className={"test-node"}>
        <input/>
        <button onClick={() => setNum(num + 1)}>count: {num} </button>
        <video src={"https://www.w3schools.com/html/mov_bbb.mp4"} controls/>
        <div className={"fixed-box"}>
            fixed box
        </div>
    </div>
}
