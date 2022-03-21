import React from "react";
import { useSelector } from "react-redux";
import Header from "../Header/Header"
import "./burger.scss"
import { RootState } from "../../app/store";

const Burger: React.FC = () => {
    const { isBurgerOpened } = useSelector((state: RootState) => state.mainSlice)
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