import {useState} from "react"

import {Transport} from "./react-transport/Transport";
import {useTransports} from "./react-transport/transportContext";

export default function App() {
    const [num, setNum] = useState(0)
    const {swapNode} = useTransports()
    const next = (num + 1) % 3
    const toggle = () => {
        if (next === 0) {
            swapNode(`port-${next}`, `port-${num}`)
        } else {
            swapNode(`port-0`, `port-${next}`)
        }
        setNum(next)
    }
    const transport2PortFixed = (from: number) => {
        swapNode(`port-${from}`, `fixed`)
        setNum(from)
    }

    return <div className={"content-root"}>
        <button onClick={toggle}>transport from {num} to {next}</button>
        <button onClick={() => transport2PortFixed(2)}>transport from 2 to fixed</button>
        <button onClick={() => transport2PortFixed(1)}>transport from 1 to fixed</button>

        <div className={"fixed-port-box"}>
            <Transport id={"fixed"}/>
        </div>
        <div className={"box-a"}>
            <Transport id={"port-0"}>
            </Transport>
        </div>
        <div className={"box-b"}>
            <Transport id={"port-1"}>
                <FirstRenderTarget/>
            </Transport>
        </div>
        <div className={"box-c"}>
            <Transport id={"port-2"}></Transport>
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
