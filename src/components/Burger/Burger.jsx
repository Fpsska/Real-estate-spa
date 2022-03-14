import React from "react";
import { useSelector } from "react-redux";
import Header from "../Header/Header"
import "./burger.scss"

const Burger = () => {
    const { isBurgerOpened } = useSelector((state) => state.mainSlice)
    // 
    return (
        <div className={isBurgerOpened ? "burger opened" : "burger"}>
            <div className="burger__wrapper">
                <Header />
            </div>
        </div>
    )
}

export default Burger;