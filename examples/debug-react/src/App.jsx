import {createPortal} from "react-dom";

export default function App () {
    return createPortal(
        "Hello World",
        document.body
    )
}
