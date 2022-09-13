import React, { useEffect, useRef } from 'react';

import { AiOutlineHeart, AiOutlineSearch } from 'react-icons/ai';
import { FiPhone } from 'react-icons/fi';

import { useAppSelector, useAppDispatch } from '../../app/hooks';

import {
    switchBurgerOpenedStatus,
    switchBurgerFixedStatus
} from '../../app/slices/mainSlice';

import { scrollToElement } from '../../helpers/scrollToElement';
import { useWidthHandler } from '../../hooks/useWidthHandler';

import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';

import './header.scss';

// /. imports

const Header: React.FC = () => {
    const { isBurgerOpened, isBurgerFixed } = useAppSelector(state => state.mainSlice);

    const scrollTo = scrollToElement();
    const { isAllowableRes } = useWidthHandler({ min: 375, max: 675 });

    const dispatch = useAppDispatch();

    const headerRef = useRef<HTMLDivElement>(null!);


    const toggleBurgerMenu = (): void => {
        dispatch(switchBurgerOpenedStatus(!isBurgerOpened));
    };

    const buttonProjectHandler = (e: React.SyntheticEvent): void => {
        e.preventDefault();
        scrollTo(document.querySelector('.page__list'));
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

                    <div className="header__section header__logo">
                        <Logo />
                    </div>

                    <nav className="header__section header__nav">
                        <Nav />
                    </nav>

                    <div className="header__section header__section--broadcast">
                        <a className="button button--projects"
                            href="#"
                            onClick={e => buttonProjectHandler(e)}
                        >
                            Projects
                        </a>
                        <a className="button button--broadcast"
                            href="#"
                            onClick={e => e.preventDefault()}
                        >
                            <div className="circle"></div>
                            <span>Live</span>
                        </a>
                    </div>

                    <div className="header__section header__section--feedback">
                        <button className="button button--call">
                            Request a call
                        </button>
                        <a className="header__telephone" href="tel:+7 812 309-77-77">
                            +7 812 309-77-77
                        </a>
                    </div>

                    <div className="header__section header__section--buttons">

                        {isAllowableRes &&
                            <a className="header__button header__button--phone" href="tel:+7 812 309-77-77">
                                <FiPhone size={16} />
                            </a>
                        }

                        <a className="header__button header__button--favourite"
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

                        <button className={`header__button burger-menu ${isBurgerOpened ? 'opened' : ''} ${isBurgerFixed ? 'fixed' : ''}`}
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
