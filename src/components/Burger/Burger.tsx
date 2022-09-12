import React, { useEffect, useRef } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';

import { switchBurgerOpenedStatus } from '../../app/slices/mainSlice';

import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';

import './burger.scss';

// /. imports

const Burger: React.FC = () => {
    const { isBurgerOpened } = useAppSelector(state => state.mainSlice);

    const dispatch = useAppDispatch();

    const burgerRef = useRef<HTMLDivElement>(null!);
    // 
    useEffect(() => {
        const keyHandler = (e: any): void => {
            if (isBurgerOpened && e.code === 'Escape') {
                dispatch(switchBurgerOpenedStatus(false));
            }
        };

        const areaHandler = (e: any): void => {
            const validModalArea = e.target === burgerRef.current || burgerRef.current.contains(e.target);
            const validElements = e.target.className === 'header__button burger-menu opened';
            if (isBurgerOpened && !validModalArea && !validElements) {
                dispatch(switchBurgerOpenedStatus(false));
            }
        };

        document.addEventListener('keydown', keyHandler);
        document.addEventListener('click', areaHandler);
        return () => {
            document.removeEventListener('click', areaHandler);
            document.removeEventListener('keydown', keyHandler);
        };
    }, [isBurgerOpened]);

    // 
    return (
        <div className={isBurgerOpened ? 'burger opened' : 'burger'} ref={burgerRef}>
            <div>

            </div>
            <div className="burger__wrapper">

                <div className="burger__logo">
                    <Logo />
                </div>
                
                <div className="burger__nav">
                    <Nav />
                </div>

            </div>
        </div>
    );
};

export default Burger;