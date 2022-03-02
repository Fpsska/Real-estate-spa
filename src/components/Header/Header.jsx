import React from "react";
import logo from "../../assets/images/logo_main-icon.svg"
import SvgTemplate from "../Common/SvgTemplate";
import "./header.scss"

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__wrapper">

                    <img className="header__logo" src={logo} alt="logo" />

                    <nav className="header__nav">
                        <ul className="nav">
                            <li className="nav__item">
                                <a className="nav__link" href="#">Ипотека</a>
                            </li>
                            <li className="nav__item">
                                <a className="nav__link" href="#">О группе компаний</a>
                            </li>
                            <li className="nav__item">
                                <a className="nav__link" href="#">Новости и акции</a>
                            </li>
                            <li className="nav__item">
                                <a className="nav__link" href="#">Тендеры</a>
                            </li>
                            <li className="nav__item">
                                <a className="nav__link" href="#">Коммерческие помещения</a>
                            </li>
                            <li className="nav__item">
                                <a className="nav__link" href="#">Контакты</a>
                            </li>
                        </ul>
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
                        <form action="#">
                            <button className="header__button header__button--search">
                                <SvgTemplate id="search" />
                            </button>
                        </form>
                        <button className="header__button header__button--burger">
                            <SvgTemplate id="burger" />
                        </button>
                    </div>

                </div>
            </div>
        </header>
    )
}

export default Header;