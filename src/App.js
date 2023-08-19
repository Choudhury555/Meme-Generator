import React from "react"
import Header from "./components/Header"
import Meme from "./components/Meme"
import "./App.css"

export default function App() {
    return (
        <div className="sizesetup">
            <Header />
            <div className="mid">
                <Meme />
            </div>
        </div>
    )
}
