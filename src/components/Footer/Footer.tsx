import React from 'react';

import { useAppSelector } from '../../app/hooks';

import ListItemTemplate from '../List/ListItemTemplate';

import './footer.scss';

// /. imports

const Footer: React.FC = () => {

    const {
        GOCdataTemplates,
        partnersDataTemplates,
        socialDataTemplates,
        mainInfoDataTemplates
    } = useAppSelector(state => state.mainSlice);

    return (
        <footer className="footer">
            <div className="container container--footer">
                <div className="footer__wrapper">
                    <div className="footer__content">

                        <div className="footer__section footer__section--navigation">

                            <nav className="footer__navigation">
                                <ul className="list">
                                    <li className="list__item">
                                        <h3 className="list__title">GOC Housewarming</h3>
                                    </li>
                                    {GOCdataTemplates.map(template => {
                                        return (
                                            <ListItemTemplate
                                                key={template.id}
                                                {...template}
                                            />
                                        );
                                    })}
                                </ul>
                            </nav>

                            <nav className="footer__navigation">
                                <ul className="list">
                                    <li className="list__item">
                                        <h3 className="list__title">Partners</h3>
                                    </li>
                                    {partnersDataTemplates.map(template => {
                                        return (
                                            <ListItemTemplate
                                                key={template.id}
                                                {...template}
                                            />
                                        );
                                    })}
                                </ul>
                            </nav>

                            <nav className="footer__navigation">
                                <ul className="list">
                                    {mainInfoDataTemplates.map(template => {
                                        return (
                                            <ListItemTemplate
                                                key={template.id}
                                                {...template}

                                                isMainLinks
                                            />
                                        );
                                    })}
                                </ul>
                            </nav>

                        </div>

                        <div className="footer__section footer__section--social">
                            <nav className="footer__navigation">
                                <ul className="list">
                                    {socialDataTemplates.map(template => {
                                        return (
                                            <ListItemTemplate
                                                key={template.id}
                                                {...template}
                                            />
                                        );
                                    })}
                                </ul>
                            </nav>
                        </div>

                        <div className="footer__section footer__section--form">
                            <form className="footer__form form" onSubmit={e => e.preventDefault()}>
                                <fieldset className="form__wrapper">
                                    <legend className="form__title">Subscribe to project updates</legend>
                                    <div className="form__group">
                                        <input className="form__input" type="text" id="subscription" placeholder="Email" required />
                                        <button className="button button--subscribe" type="submit">Subscribe</button>
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