import React from "react"
import "./App.css"

export default function Header(){
    return(
        <nav>
            <img src={require('./images/react-icon-small.png')} className="nav--icon" />
            <h3 className="nav--logo_text">ReactFacts</h3>
            <h4 className="nav--title">React Course - Project 1</h4>
        </nav>
    )
}