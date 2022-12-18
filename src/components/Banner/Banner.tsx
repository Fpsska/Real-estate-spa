import React from 'react';

import { useAppSelector } from '../../app/hooks';

import { scrollToElement } from '../../helpers/scrollToElement';

import logo from '../../assets/images/logo-icon.svg';
import './banner.scss';

// /. imports

const Banner: React.FC = () => {
    const { projectText, projectCount } = useAppSelector(
        state => state.filterSlice
    );

    const scrollTo = scrollToElement();

    // /. hooks

    const onProjectLinkClick = (e: React.SyntheticEvent): void => {
        e.preventDefault();
        scrollTo(document.querySelector('.page__list'));
    };

    const onLogoClick = (e: React.SyntheticEvent): void => {
        e.preventDefault();
        scrollTo(document.querySelector('.header'));
    };

    // /. functions

    return (
        <div className="banner">
            <div className="banner__wrapper">
                <div className="banner__content">
                    <a
                        className="banner__image"
                        href="#"
                        onClick={e => onLogoClick(e)}
                    >
                        <img
                            src={logo}
                            alt="logo"
                        />
                    </a>
                    <ul className="banner__information">
                        <li className="banner__column">
                            <span className="banner__count">
                                {projectCount}
                            </span>
                            <span className="banner__title">{projectText}</span>
                        </li>
                        <li className="banner__column">
                            <span className="banner__count">678</span>
                            <span className="banner__title">suggestions</span>
                        </li>
                        <li className="banner__column">
                            <span className="banner__count">1,54</span>
                            <span className="banner__title">starts price</span>
                        </li>
                    </ul>
                    <a
                        className="button button--banner"
                        href="#"
                        onClick={e => onProjectLinkClick(e)}
                    >
                        Go to projects
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Banner;
