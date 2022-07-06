import React from 'react';

import { useAppSelector } from '../../app/hooks';

import { scrollToElement } from '../../helpers/scrollToElement';

import logo from '../../assets/images/logo-icon.svg';
import './banner.scss';

// /. imports

const Banner: React.FC = () => {

    const { cards, projectText } = useAppSelector(state => state.filterSlice);

    const scrollTo = scrollToElement();

    return (
        <div className="banner">
            <div className="banner__wrapper">
                <div className="banner__content">
                    <img className="banner__image" src={logo} alt="logo" />
                    <div className="banner__information">
                        <div className="banner__column">
                            <span className="banner__count">{cards ? cards.length : 0}</span>
                            <span className="banner__title">{projectText}</span>
                        </div>
                        <div className="banner__column">
                            <span className="banner__count">678</span>
                            <span className="banner__title">предложений</span>
                        </div>
                        <div className="banner__column">
                            <span className="banner__count">3,26</span>
                            <span className="banner__title">от млн. ₽</span>
                        </div>
                    </div>
                    <button className="banner__button" onClick={() => scrollTo(document.querySelector('.page__list'))}>Перейти к проектам</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;