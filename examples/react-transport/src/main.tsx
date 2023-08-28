import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {TransportProvider} from "./react-transport/TransportProvider"
import "./index.css"

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <TransportProvider>
            <App/>
        </TransportProvider>
    </React.StrictMode>,
)
