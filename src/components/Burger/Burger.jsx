import React from "react";
import Nav from "../Nav/Nav";
import "./burger.scss"

const Burger = () => {
    return (
        <div className="burger">
            <div className="burger__wrapper">
                <Nav />
            </div>
        </div>
    )
}

export default Burger;