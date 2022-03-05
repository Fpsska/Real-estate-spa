import React from "react";
import { useSelector } from "react-redux";
import { Spring, animated } from "react-spring";
import Header from "../Header/Header"
import "./burger.scss"

const Burger = () => {
    const { isBurgerOpened } = useSelector((state) => state.mainSlice)
    return (
        <Spring
            from={{ transform: "translateX(-300px)" }}
            to={{ transform: "translateX(0px)" }}
            reverse={!isBurgerOpened}
            config={{ duration: 360 }}
        >
            {(styles) => (
                <animated.div className="burger" style={styles}>
                    <div className="burger__wrapper">
                        <Header />
                    </div>
                </animated.div>
            )}
        </Spring>
    )
}

export default Burger;