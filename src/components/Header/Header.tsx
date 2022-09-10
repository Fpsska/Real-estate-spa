import React, { useEffect, useRef } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';

import {
    switchBurgerOpenedStatus,
    switchBurgerFixedStatus
} from '../../app/slices/mainSlice';

import SvgTemplate from '../Common/SvgTemplate';
import Nav from '../Nav/Nav';

import logo from '../../assets/images/logo_main-icon.svg';

import './header.scss';

// /. imports

const Header: React.FC = () => {
    const { isBurgerOpened, isBurgerFixed } = useAppSelector(state => state.mainSlice);

    const dispatch = useAppDispatch();

    const headerRef = useRef<HTMLDivElement>(null!);


    const toggleBurgerMenu = (): void => {
        dispatch(switchBurgerOpenedStatus(!isBurgerOpened));
    };

    useEffect(() => {
        const defineBurgerPosition = (): void => {
            const elHeight = headerRef.current.offsetHeight;
            const scrollPos = window.pageYOffset;
            if (scrollPos > elHeight) {
                dispatch(switchBurgerFixedStatus(true));
            } else {
                dispatch(switchBurgerFixedStatus(false));
            }
        };

        document.addEventListener('scroll', defineBurgerPosition);
        return () => {
            document.removeEventListener('scroll', defineBurgerPosition);
        };
    }, []);

    return (
        <header className="header" ref={headerRef}>
            <div className="container">
                <div className="header__wrapper">
                    <a
                        className="header__logo logo"
                        href="https://cake.ru/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img className="logo__image" src={logo} alt="logo" />
                    </a>

                    <nav className="header__nav">
                        <Nav />
                    </nav>

                    <div className="header__section header__section--broadcast">
                        <button className="header__button header__button--projects">
                            Проекты
                        </button>
                        <button className="header__button header__button--broadcast">
                            <div className="circle"></div>
                            <span>Live</span>
                        </button>
                    </div>

                    <div className="header__section header__section--feedback">
                        <button className="header__button header__button--call">
                            Заказать звонок
                        </button>
                        <a className="header__telephone" href="tel:+7 812 309-77-77">
                            +7 812 309-77-77
                        </a>
                    </div>

                    <div className="header__section header__section--interface">
                        <button className="header__button header__button--like" area-label="show favourite">
                            <SvgTemplate id="heart" />
                        </button>
                        <form className="header__form" onSubmit={e => e.preventDefault()}>
                            <button className="header__button header__button--search" area-label="search" type="submit">
                                <SvgTemplate id="search" />
                            </button>
                        </form>
                        <button
                            className={
                                isBurgerOpened
                                    ? 'header__button burger-menu opened'
                                    : 'header__button burger-menu'
                            }
                            area-label={isBurgerOpened ? 'close burger menu' : 'open burger menu'}
                            onClick={toggleBurgerMenu}
                        >
                            <span className="burger-menu__line"></span>
                        </button>
                        {isBurgerFixed &&
                            <div
                                className={
                                    isBurgerOpened
                                        ? 'header__button burger-menu opened fixed'
                                        : 'header__button burger-menu fixed'
                                }
                                onClick={toggleBurgerMenu}
                            >
                                <span className="burger-menu__line"></span>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
