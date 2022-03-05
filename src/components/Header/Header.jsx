import React, { useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { switchBurgerStatus } from "../../app/mainSlice";
import logo from "../../assets/images/logo_main-icon.svg"
import SvgTemplate from "../Common/SvgTemplate";
import Burger from "../Burger/Burger";
import Nav from "../Nav/Nav";
import "./header.scss"

const Header = () => {
    const { isBurgerHidden } = useSelector(state => state.mainSlice)
    const dispath = useDispatch()

    const openBurgerMenu = (e) => {
        dispath(switchBurgerStatus(!isBurgerHidden))
    }

    const keyHandler = (e) => {
        if (e.code === "Escape") {
            dispath(switchBurgerStatus(false))
        }
    }

    useLayoutEffect(() => {
        window.addEventListener("keydown", keyHandler)
        return () => {
            window.removeEventListener("keydown", keyHandler)
        }
    }, [isBurgerHidden])

    return (
        <header className="header">
            <div className="container">
                <div className="header__wrapper">

                    <>
                        {isBurgerHidden ? <Burger /> : <></>}
                    </>

                    <a className="header__logo logo" href="https://cake.ru/" target="_blank">
                        <img className="logo__image" src={logo} alt="logo" />
                    </a>

                    <nav className="header__nav">
                        <Nav />
                    </nav>

                    <div className="header__section header__section--broadcast">
                        <button className="header__button header__button--projects">Проекты</button>
                        <button className="header__button header__button--broadcast">Live</button>
                    </div>

                    <div className="header__section header__section--feedback">
                        <button className="header__button header__button--call">Заказать звонок</button>
                        <a className="header__telephone" href="tel:+7 812 309-77-77">+7 812 309-77-77</a>
                    </div>

                    <div className="header__section header__section--interface">
                        <button className="header__button header__button--like">
                            <SvgTemplate id="heart" />
                        </button>
                        <form className="header__form" action="#">
                            <button className="header__button header__button--search">
                                <SvgTemplate id="search" />
                            </button>
                        </form>
                        <div className={isBurgerHidden ? "header__button burger-menu opened" : "header__button burger-menu"} onClick={openBurgerMenu}>
                            <div className="burger-menu__line"></div>
                            <div className="burger-menu__line"></div>
                            <div className="burger-menu__line"></div>
                        </div>
                    </div>

                </div>
            </div>
        </header>
    )
}

export default Header;