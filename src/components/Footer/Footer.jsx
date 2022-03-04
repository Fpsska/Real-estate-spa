import React from "react";
import "./footer.scss"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <div className="footer__content">
                        <ul className="list">
                            <li className="list__item">
                                <h3 className="list__title">ГК Новоселье</h3>
                            </li>
                            <li className="list__item">
                                <a className="list__link" href="#">ЖК Дует</a>
                            </li>
                            <li className="list__item">
                                <a className="list__link" href="#">ЖК Эпсилон</a>
                            </li>
                            <li className="list__item">
                                <a className="list__link" href="#">ЖК ЕТА</a>
                            </li>
                            <li className="list__item">
                                <a className="list__link" href="#">ЖК Уютный</a>
                            </li>
                        </ul>

                        <ul className="list">
                            <li className="list__item">
                                <h3 className="list__title">Партнеры</h3>
                            </li>
                            <li className="list__item">
                                <a className="list__link" href="#">ЖК Эгоист</a>
                            </li>
                            <li className="list__item">
                                <a className="list__link" href="#">ЖК Выборгский</a>
                            </li>
                            <li className="list__item">
                                <a className="list__link" href="#">ЖК Партнера</a>
                            </li>
                        </ul>

                        <ul className="list">
                            <li className="list__item">
                                <a className="list__link list__title" href="#">О компании</a>
                            </li>
                            <li className="list__item">
                                <a className="list__link list__title" href="#">Пресс-релизы</a>
                            </li>
                            <li className="list__item">
                                <a className="list__link list__title" href="#">Контакты</a>
                            </li>
                            <li className="list__item">
                                <a className="list__link list__title" href="#">Тендеры</a>
                            </li>
                            <li className="list__item">
                                <a className="list__link list__title" href="#">Коммерческие помещения</a>
                            </li>
                        </ul>

                        <ul className="list">
                            <li className="list__item">
                                <a className="list__link" href="#">vkontakte</a>
                            </li>
                            <li className="list__item">
                                <a className="list__link" href="#">facebook</a>
                            </li>
                            <li className="list__item">
                                <a className="list__link" href="#">instagram</a>
                            </li>
                            <li className="list__item">
                                <a className="list__link" href="#">youtube</a>
                            </li>
                        </ul>

                        <form className="footer__form form" action="#">
                            <h3 className="form__title">Подпишитесь на обновления по проектам</h3>
                            <div className="form__group">
                                <input className="form__input" type="text" id="subscription" placeholder="Email" />
                                <button className="form__button">Подписаться</button>
                            </div>
                            <label className="form__label" htmlFor="subscription">Нажимая кнопку «Подписаться» вы даете свое согласие на обработку персональных данных</label>
                        </form>
                    </div>

                    <div className="footer__copyright copyright">
                        <span className="copyright__text">© n-gk.ru, 2022</span>
                        <span className="copyright__text">Разработка сайта – <a href="https://cake.ru/" target="_blank"> cake.ru</a></span>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer;