import React from "react";
import SvgTemplate from "../Common/SvgTemplate";
import "./filter.scss"

const Filter = () => {
    return (
        <form action="#" className="filter">
            <div className="filter__wrapper">
                <div className="filter__group filter__group--button">
                    <div className="filter__name">Студия</div>
                    <button className="filter__button active">1</button>
                    <button className="filter__button">2</button>
                    <button className="filter__button">3+</button>
                </div>
                <div className="filter__group">
                    <input className="filter__input" type="text" placeholder="Цена от 1 450 000" />
                    <input className="filter__input" type="text" placeholder="до 20 000 000" />
                    <input className="filter__input" type="range" />
                </div>
                <div className="filter__group">
                    <label htmlFor="" className="filter__label">
                        <input type="checkbox" className="filter__input filter__input--checkbox" />
                        1 квартал 2022
                    </label>
                    <label htmlFor="" className="filter__label">
                        <input type="checkbox" className="filter__input filter__input--checkbox" />
                        3 квартал 2022
                    </label>
                    <label htmlFor="" className="filter__label">
                        <input type="checkbox" className="filter__input filter__input--checkbox" />
                        2 квартал 2022
                    </label>
                    <label htmlFor="" className="filter__label">
                        <input type="checkbox" className="filter__input filter__input--checkbox" />
                        До конца года
                    </label>
                </div>
                <div className="filter__group">
                    <input className="filter__input filter__input--area" type="text" placeholder="Район метро" />
                    <SvgTemplate id="search"/>
                </div>
            </div>
        </form>
    )
}

export default Filter;