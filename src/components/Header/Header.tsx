import React, { useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
    switchBurgerOpenedStatus,
    switchBurgerFixedStatus
} from '../../app/slices/mainSlice';
import logo from '../../assets/images/logo_main-icon.svg';
import SvgTemplate from '../Common/SvgTemplate';
import Nav from '../Nav/Nav';
import './header.scss';
import { RootState } from '../../app/store';

// /. imports

const Header: React.FC = () => {
    const { isBurgerOpened, isBurgerFixed } = useSelector(
        (state: RootState) => state.mainSlice
    );
    const dispath = useDispatch();
    const header = useRef<HTMLDivElement>(null!);
    // 
    const toggleBurgerMenu = (): void => {
        dispath(switchBurgerOpenedStatus(!isBurgerOpened));
    };

    const keyHandler = useCallback((e: any): void => {
        if (isBurgerOpened && e.code === 'Escape') {
            dispath(switchBurgerOpenedStatus(false));
        }
    }, [isBurgerOpened]);

    const defineBurgerPosition = useCallback((): void => {
        const elHeight = header.current.offsetHeight;
        const scrollPos = window.pageYOffset;
        if (scrollPos > elHeight) {
            dispath(switchBurgerFixedStatus(true));
        } else {
            dispath(switchBurgerFixedStatus(false));
        }
    }, []);

    useEffect(() => {
        document.addEventListener('scroll', defineBurgerPosition);
        return () => {
            document.removeEventListener('scroll', defineBurgerPosition);
        };
    }, [defineBurgerPosition]);

    useEffect(() => {
        document.addEventListener('keydown', keyHandler);
        return () => {
            document.removeEventListener('keydown', keyHandler);
        };
    }, [isBurgerOpened, keyHandler]);

    return (
        <header className="header" ref={header}>
            <div className="container">
                <div className="header__wrapper">
                    <a
                        className="header__logo logo"
                        href="https://cake.ru/"
                        target="_blank" rel="noreferrer"
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
                        <button className="header__button header__button--like">
                            <SvgTemplate id="heart" />
                        </button>
                        <form className="header__form" action="#">
                            <button className="header__button header__button--search">
                                <SvgTemplate id="search" />
                            </button>
                        </form>
                        <div
                            className={
                                isBurgerOpened
                                    ? 'header__button burger-menu opened'
                                    : 'header__button burger-menu'
                            }
                            onClick={toggleBurgerMenu}
                        >
                            <span className="burger-menu__line"></span>
                        </div>
                        {isBurgerFixed ? (
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
                        ) : (
                            <></>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
