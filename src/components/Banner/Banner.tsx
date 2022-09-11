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
        <article className="banner">
            <div className="banner__wrapper">
                <div className="banner__content">
                    <img className="banner__image" src={logo} alt="logo" />
                    <div className="banner__information">
                        <div className="banner__column">
                            <span className="banner__count">{cards ? cards.length : 0}</span>
                            <span className="banner__title">projects</span>
                        </div>
                        <div className="banner__column">
                            <span className="banner__count">678</span>
                            <span className="banner__title">suggestions</span>
                        </div>
                        <div className="banner__column">
                            <span className="banner__count">1,54</span>
                            <span className="banner__title">starts from ml. ₽</span>
                        </div>
                    </div>
                    <button className="banner__button"
                        onClick={() => scrollTo(document.querySelector('.page__list'))}
                    >
                        Go to projects
                    </button>
                </div>
            </div>
        </article>
    );
};

export default Banner;