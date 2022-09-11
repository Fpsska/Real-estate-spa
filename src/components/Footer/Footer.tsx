import React from 'react';

import './footer.scss';

// /. imports

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="container container--footer">
                <div className="footer__wrapper">
                    <div className="footer__content">

                        <div className="footer__section footer__section--navigation">

                            <nav className="navigation-menu">
                                <ul className="list">
                                    <li className="list__item">
                                        <h3 className="list__title">GOC Housewarming</h3>
                                    </li>
                                    <li className="list__item">
                                        <a className="list__link" href="#" onClick={e => e.preventDefault()}>RC Duet</a>
                                    </li>
                                    <li className="list__item">
                                        <a className="list__link" href="#" onClick={e => e.preventDefault()}>RC Epsilon</a>
                                    </li>
                                    <li className="list__item">
                                        <a className="list__link" href="#" onClick={e => e.preventDefault()}>RC ETA</a>
                                    </li>
                                    <li className="list__item">
                                        <a className="list__link" href="#" onClick={e => e.preventDefault()}>RC Cosy</a>
                                    </li>
                                </ul>
                            </nav>

                            <nav className="navigation-menu">
                                <ul className="list">
                                    <li className="list__item">
                                        <h3 className="list__title">Partners</h3>
                                    </li>
                                    <li className="list__item">
                                        <a className="list__link" href="#" onClick={e => e.preventDefault()}>RC Egoist</a>
                                    </li>
                                    <li className="list__item">
                                        <a className="list__link" href="#" onClick={e => e.preventDefault()}>RC Vyborgsky</a>
                                    </li>
                                    <li className="list__item">
                                        <a className="list__link" href="#" onClick={e => e.preventDefault()}>RC Panther</a>
                                    </li>
                                </ul>
                            </nav>

                            <nav className="navigation-menu">
                                <ul className="list">
                                    <li className="list__item list__item--title">
                                        <a className="list__link list__title" href="#" onClick={e => e.preventDefault()}>About company</a>
                                    </li>
                                    <li className="list__item list__item--title">
                                        <a className="list__link list__title" href="#" onClick={e => e.preventDefault()}>Press releases</a>
                                    </li>
                                    <li className="list__item list__item--title">
                                        <a className="list__link list__title" href="#" onClick={e => e.preventDefault()}>Contacts</a>
                                    </li>
                                    <li className="list__item list__item--title">
                                        <a className="list__link list__title" href="#" onClick={e => e.preventDefault()}>Tenders</a>
                                    </li>
                                    <li className="list__item list__item--title">
                                        <a className="list__link list__title" href="#" onClick={e => e.preventDefault()}>Commercial premises</a>
                                    </li>
                                </ul>
                            </nav>

                        </div>

                        <div className="footer__section footer__section--social">
                            <nav className="navigation-menu">
                                <ul className="list">
                                    <li className="list__item">
                                        <a className="list__link" href="#" onClick={e => e.preventDefault()}>vkontakte</a>
                                    </li>
                                    <li className="list__item">
                                        <a className="list__link" href="#" onClick={e => e.preventDefault()}>facebook</a>
                                    </li>
                                    <li className="list__item">
                                        <a className="list__link" href="#" onClick={e => e.preventDefault()}>instagram</a>
                                    </li>
                                    <li className="list__item">
                                        <a className="list__link" href="#" onClick={e => e.preventDefault()}>youtube</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        <div className="footer__section footer__section--form">
                            <form className="footer__form form" onSubmit={e => e.preventDefault()}>
                                <fieldset>
                                    <legend className="form__title">Subscribe to project updates</legend>
                                    <div className="form__group">
                                        <input className="form__input" type="text" id="subscription" placeholder="Email" required />
                                        <button className="form__button" type="submit">Subscribe</button>
                                    </div>
                                    <label className="form__label" htmlFor="subscription">By clicking the «Subscribe» button, You consent to the processing of personal data</label>
                                </fieldset>
                            </form>
                        </div>

                    </div>

                    <address className="footer__copyright copyright">
                        <span className="copyright__text">© n-gk.ru, 2022</span>
                        <span className="copyright__text">Sites developing –
                            <a href="https://cake.ru/" target="_blank" rel="noreferrer"> cake.ru</a>
                        </span>
                    </address>

                </div>
            </div>
        </footer>
    );
};

export default Footer;