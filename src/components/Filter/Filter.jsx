import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCurrentQuartalValue, deleteCurrentQuartalValue } from "../../app/mainSlice";
import SvgTemplate from "../Common/SvgTemplate";
import ButtonList from "../Button/ButtonList";
import CheckboxList from "../Checkbox/CheckboxList";
import "./filter.scss"

const Filter = () => {
    const { roomCount, quartal } = useSelector(state => state.mainSlice)
    const dispatch = useDispatch()
    // useEffect(() => {
    //     console.log("roomCount:", roomCount)
    // }, [roomCount])

    const handleFormSubmit = (e) => {
        e.preventDefault()
    }

    // useEffect(() => {
    //     console.log("quartal:", quartal)
    // }, [quartal])

    return (
        <form className="filter" action="#" onSubmit={handleFormSubmit}>
            <div className="filter__wrapper">
                <div className="filter__group filter__group--button">
                    <ButtonList />
                </div>
                <div className="filter__group">
                    <input className="filter__input" type="text" placeholder="Цена от 1 450 000" />
                    <input className="filter__input" type="text" placeholder="до 20 000 000" />
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
                    <CheckboxList />
                </div>
                <div className="filter__group">
                    <input className="filter__input filter__input--area" type="text" placeholder="Район метро" />
                    <SvgTemplate id="search" />
                </div>
            </div>

            <div className="filter__group filter__group--submit">
                <span className="filter__count">20 проектов</span>
                <button className="filter__button filter__button--submit" type="submit">Показать</button>
            </div>
        </form >
    )
}

export default Filter;