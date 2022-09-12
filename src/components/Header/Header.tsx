import React, { useEffect, useRef } from 'react';

import { AiOutlineHeart, AiOutlineSearch } from 'react-icons/ai';

import { useAppSelector, useAppDispatch } from '../../app/hooks';

import {
    switchBurgerOpenedStatus,
    switchBurgerFixedStatus
} from '../../app/slices/mainSlice';

import { scrollToElement } from '../../helpers/scrollToElement';

import Nav from '../Nav/Nav';

import logo from '../../assets/images/logo_main-icon.svg';

import './header.scss';

// /. imports

const Header: React.FC = () => {
    const { isBurgerOpened, isBurgerFixed } = useAppSelector(state => state.mainSlice);

    const scrollTo = scrollToElement();

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
                        <button className="header__button header__button--projects"
                            onClick={() => scrollTo(document.querySelector('.page__list'))}
                        >
                            Projects
                        </button>
                        <a className="header__button header__button--broadcast"
                            href="#"
                            onClick={e => e.preventDefault()}
                        >
                            <div className="circle"></div>
                            <span>Live</span>
                        </a>
                    </div>

                    <div className="header__section header__section--feedback">
                        <button className="header__button header__button--call">
                            Request a call
                        </button>
                        <a className="header__telephone" href="tel:+7 812 309-77-77">
                            +7 812 309-77-77
                        </a>
                    </div>

                    <div className="header__section header__section--interface">

                        <a className="header__button header__button--like"
                            href="#"
                            aria-label="show favourite"
                            onClick={e => e.preventDefault()}
                        >
                            <AiOutlineHeart size={18} />
                        </a>

                        <a className="header__button header__button--search"
                            href="#"
                            aria-label="search"
                            onClick={e => e.preventDefault()}
                        >
                            <AiOutlineSearch size={18} />
                        </a>

                        <button
                            className={`header__button burger-menu ${isBurgerOpened ? 'opened' : ''} ${isBurgerFixed ? 'fixed' : ''}`}
                            area-label={isBurgerOpened ? 'close burger menu' : 'open burger menu'}
                            onClick={toggleBurgerMenu}
                        >
                            <span className="burger-menu__line"></span>
                        </button>

                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
