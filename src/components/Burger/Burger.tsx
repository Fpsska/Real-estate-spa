import React from 'react';

import { useAppSelector } from '../../app/hooks';

import Header from '../Header/Header';
import './burger.scss';

// /. imports

const Burger: React.FC = () => {
    const { isBurgerOpened } = useAppSelector(state => state.mainSlice);
    // 
    return (
        <div className={isBurgerOpened ? 'burger opened' : 'burger'}>
            <div className="burger__wrapper">
                <Header />
            </div>
        </div>
    );
};

export default Burger;