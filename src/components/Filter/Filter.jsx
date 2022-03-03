import React from "react";
import SvgTemplate from "../Common/SvgTemplate";
import "./filter.scss"

const Filter = () => {
    return (
        <form className="filter" action="#">
            <div className="filter__wrapper">
                <div className="filter__group filter__group--button">
                    <button className="filter__button active">Студия</button>
                    <button className="filter__button">1</button>
                    <button className="filter__button">2</button>
                    <button className="filter__button">3+</button>
                </div>
                <div className="filter__group">
                    <input className="filter__input" type="text" placeholder="Цена от 1 450 000" value="" />
                    <input className="filter__input" type="text" placeholder="до 20 000 000" value="" />
                    {/*  */}
                    <div className="price">
                        <div className="price__progress"></div>
                        <div className="price__range"></div>
                        <div className="price__thumb price__thumb--left"></div>
                        <div className="price__thumb price__thumb--rigth"></div>
                    </div>

                    <div className="price-range">
                        <input className="price-range__input price-range__input--min" type="range" min="0" max="10000" />
                        <input className="price-range__input price-range__input--max" type="range" min="0" max="100000" />
                    </div>
                    {/*  */}
                </div>
                <div className="filter__group">
                    <label className="filter__label">
                        <input type="checkbox" className="filter__input filter__input--checkbox" name="quarter" disabled />
                        <span className="filter__checkbox"></span>
                        1 квартал 2022
                    </label>
                    <label className="filter__label">
                        <input type="checkbox" className="filter__input filter__input--checkbox" name="quarter" />
                        <span className="filter__checkbox"></span>
                        3 квартал 2022
                    </label>
                    <label className="filter__label">
                        <input type="checkbox" className="filter__input filter__input--checkbox" name="quarter" />
                        <span className="filter__checkbox"></span>
                        2 квартал 2022
                    </label>
                    <label className="filter__label">
                        <input type="checkbox" className="filter__input filter__input--checkbox" name="quarter" />
                        <span className="filter__checkbox"></span>
                        До конца года
                    </label>
                </div>
                <div className="filter__group">
                    <input className="filter__input filter__input--area" type="text" placeholder="Район метро" />
                    <SvgTemplate id="search" />
                </div>
            </div>
        </form>
    )
}

export default Filter;