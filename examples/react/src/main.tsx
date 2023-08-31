import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import "./index.css"

import { HomePage } from "./Home"
import { ReactTransportDemo } from "./playgrounds/react-transport/Page"

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<HomePage />}></Route>
                <Route path={"/react-transport"} element={<ReactTransportDemo />}></Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
)
