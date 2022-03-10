import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCurrentQuartalValue, deleteCurrentQuartalValue, switchDataFilteredStatus } from "../../app/mainSlice";
import SvgTemplate from "../Common/SvgTemplate";
import ButtonList from "../Button/ButtonList";
import CheckboxList from "../Checkbox/CheckboxList";
import "./filter.scss"

const Filter = ({ enteredSearchValue, setEnteredSearchValue }) => {
    const { roomCount, quartal, cards, isProjectsUndefined, isDataLoading } = useSelector(state => state.mainSlice)
    const [projectText, setProjectText] = useState("проекта")
    const dispatch = useDispatch()

    useEffect(() => {
        if (cards.length >= 5 || cards.length === 0 || isProjectsUndefined) {
            setProjectText("проектов")
        }
        if (cards.length === 1) {
            setProjectText("проект")
        }
    }, [cards, isProjectsUndefined])

    const handleFormSubmit = (e) => {
        e.preventDefault()
        dispatch(switchDataFilteredStatus(true))
    }
    return (
        <form className="filter" action="#" onSubmit={handleFormSubmit}>
            <div className="filter__wrapper">
                <div className="filter__group filter__group--button">
                    <ButtonList />
                </div>
                <div className="filter__group">
                    <input className="filter__input" type="text" placeholder="Цена от 1 450 000" disabled={isDataLoading ? true : ""} />
                    <input className="filter__input" type="text" placeholder="до 20 000 000" disabled={isDataLoading ? true : ""} />
                    {/*  */}
                    <div className="price">
                        <div className="price__progress"></div>
                        <div className="price__range"></div>
                        <div className="price__thumb price__thumb--left"></div>
                        <div className="price__thumb price__thumb--rigth"></div>
                    </div>
                    <div className="price-range">
                        <input className="price-range__input price-range__input--min" type="range" min="0" max="10000" disabled={isDataLoading ? true : ""} />
                        <input className="price-range__input price-range__input--max" type="range" min="0" max="100000" disabled={isDataLoading ? true : ""} />
                    </div>
                    {/*  */}
                </div>
                <div className="filter__group">
                    <CheckboxList />
                </div>
                <div className="filter__group">
                    <input className="filter__input filter__input--area" type="text" placeholder="Район метро" value={enteredSearchValue} onChange={(e) => setEnteredSearchValue(e.target.value)} disabled={isDataLoading ? true : ""} />
                    <SvgTemplate id="search" />
                </div>
            </div>

            <div className="filter__group filter__group--submit">
                <span className="filter__count">{`${isProjectsUndefined ? 0 : cards.length} ${projectText}`}</span>
                <button className="filter__button filter__button--submit" type="submit">Показать</button>
            </div>
        </form >
    )
}

export default Filter;