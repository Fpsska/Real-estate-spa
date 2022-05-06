import React from 'react';

import logo from '../../assets/images/logo-icon.svg';
import './banner.scss';

// /. imports

const Banner: React.FC = () => {
    return (
        <div className="banner">
            <div className="banner__wrapper">
                <div className="banner__content">
                    <img className="banner__image" src={logo} alt="logo" />
                    <div className="banner__information">
                        <div className="banner__column">
                            <span className="banner__count">4</span>
                            <span className="banner__title">проекта</span>
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
                    <button className="banner__button">Перейти к проектам</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;