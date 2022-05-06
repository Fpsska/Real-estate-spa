import React from 'react';
import './nav.scss';

// /. imports

const Nav: React.FC = () => {
    return (
        <ul className="nav">
            <li className="nav__item">
                <a className="nav__link" href="#">Ипотека</a>
            </li>
            <li className="nav__item">
                <a className="nav__link" href="#">О группе компаний</a>
            </li>
            <li className="nav__item">
                <a className="nav__link" href="#">Новости и акции</a>
            </li>
            <li className="nav__item">
                <a className="nav__link" href="#">Тендеры</a>
            </li>
            <li className="nav__item">
                <a className="nav__link" href="#">Коммерческие помещения</a>
            </li>
            <li className="nav__item">
                <a className="nav__link" href="#">Контакты</a>
            </li>
        </ul>
    );
};

export default Nav;