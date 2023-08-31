# Transport Demo

React reparenting can be easily implemented by `createPortal`

1. use `ReactDOM.createPortal` to keep FiberNode state under the container, and no other effect.
2. use native `replaceChild` to swap container can only effect container DOM tree relations.

## Usage

`TransparentProvider.tsx` store the containers
`Transport.tsx` register and unregister the container

that's all

```jsx
const Demo = () => {
    const {swapNode} = useTransports()
    
    const handleSwap = (fromId, toId) => {
        swapNode(fromId, toId)
    }
    return (
        <TransportProvider>
            <Transport id={"container1"}>
                <div>container1</div>
            </Transport>
            <Transport id={"container2"}></Transport>
        </TransportProvider>
    )
}
```
