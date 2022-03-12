import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { switchDataFilteredStatus } from "../../app/mainSlice";
import SvgTemplate from "../Common/SvgTemplate";
import ButtonList from "../Button/ButtonList";
import CheckboxList from "../Checkbox/CheckboxList";
import "./filter.scss"

const Filter = ({ enteredSearchValue, setEnteredSearchValue }) => {
    const { cards, isProjectsUndefined, isDataLoading } = useSelector(state => state.mainSlice)
    const [projectText, setProjectText] = useState("проекта")
    const [priceGap] = useState(2000)
    const [inputRangeMinValue, setRangeMinValue] = useState(1000)
    const [inputRangeMaxValue, setRangeMaxValue] = useState(8000)
    const [inputRangeTotal] = useState(20000)
    const inputRangeMin = useRef(null)
    const inputRangeMax = useRef(null)
    const progress = useRef(null)
    const inputPriceMin = useRef(null)
    const inputPriceMax = useRef(null)
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

    const inputRangeMinHandler = (e) => {
        setRangeMinValue(+e.target.value)
        const minValue = +e.target.value
        if (((parseInt(inputRangeMax.current.value) - parseInt(inputRangeMin.current.value)) < priceGap)) {
            setRangeMinValue(inputRangeMaxValue - priceGap)
        } else {
            progress.current.style.left = (minValue / inputRangeMin.current.max) * 100 + "%"
        }
        inputPriceMin.current.value = ""
    }

    const inputRangeMaxHandler = (e) => {
        setRangeMaxValue(+e.target.value)
        const maxValue = +e.target.value
        if (((parseInt(inputRangeMax.current.value) - parseInt(inputRangeMin.current.value)) < priceGap)) {
            setRangeMaxValue(inputRangeMinValue + priceGap)
        } else {
            progress.current.style.right = 100 - (maxValue / inputRangeMax.current.max) * 100 + "%"
        }
        inputPriceMax.current.value = ""
    }

    const inputStartPriceHandler = (e) => {
        const inputMinValue = e.target.value.replace(/[^0-9]/g, '')
        if (inputRangeMaxValue - inputMinValue >= priceGap && inputMinValue <= inputRangeTotal) {
            setRangeMinValue(inputMinValue)
        }
        if (inputMinValue > inputRangeMaxValue - priceGap) {
            setRangeMinValue(inputRangeMaxValue - priceGap)
        }
        if (!inputMinValue) {
            setRangeMinValue(0)
        }
    }

    const inputEndPriceHandler = (e) => {
        const inputMaxValue = e.target.value.replace(/[^0-9]/g, '')
        if (inputMaxValue - inputRangeMinValue >= priceGap && inputMaxValue <= inputRangeTotal) {
            setRangeMaxValue(inputMaxValue)
        }
        if (inputMaxValue >= inputRangeTotal) {
            setRangeMaxValue(inputRangeTotal)
        }
        if (!inputMaxValue) {
            setRangeMaxValue(inputRangeTotal)
        }
    }

    useEffect(() => {
        progress.current.style.left = (inputRangeMinValue / inputRangeMin.current.max) * 100 + "%"
        progress.current.style.right = 100 - (inputRangeMaxValue / inputRangeMax.current.max) * 100 + "%"
    }, [inputRangeMinValue, inputRangeMaxValue])


    useEffect(() => {
        inputRangeMax.current.addEventListener("mouseover", () => {
            inputRangeMax.current.classList.add("active")
        })
        inputRangeMax.current.addEventListener("mouseout", () => {
            inputRangeMax.current.classList.remove("active")
        })
        return () => {
            inputRangeMax.current.removeEventListener("mouseover", () => { })
            inputRangeMax.current.removeEventListener("mouseout", () => { })
        }
    }, [])

    return (
        <form className="filter" action="#" onSubmit={handleFormSubmit}>
            <div className="filter__wrapper">
                <div className="filter__group filter__group--button">
                    <ButtonList />
                </div>
                <div className="filter__group">
                    <input ref={inputPriceMin} onChange={inputStartPriceHandler} className="filter__input filter__input--price" type="number" placeholder="Цена от 1 450 000" disabled={isDataLoading ? true : ""} />
                    <input ref={inputPriceMax} onChange={inputEndPriceHandler} className="filter__input filter__input--price" type="number" placeholder="до 20 000 000" disabled={isDataLoading ? true : ""} />
                    {/*  */}
                    <div className="filter__slider">
                        <div className="slider">
                            <div className="slider__progress" ref={progress}></div>
                        </div>
                    </div>
                    <div className="filter__range">
                        <div className="price-range">
                            <div className="price-range__controls">
                                <input ref={inputRangeMin} onChange={inputRangeMinHandler} className="price-range__input price-range__input--min" type="range" min="0" max={inputRangeTotal} value={inputRangeMinValue} disabled={isDataLoading ? true : ""} step="100" />
                                <input ref={inputRangeMax} onChange={inputRangeMaxHandler} className="price-range__input price-range__input--max" type="range" min="0" max={inputRangeTotal} value={inputRangeMaxValue} disabled={isDataLoading ? true : ""} step="100" />
                            </div>
                            <div className="price-range__indicators">
                                <span className="price-range__counter price-range__counter--min">{inputRangeMinValue}</span>
                                <span className="price-range__counter price-range__counter--max">{inputRangeMaxValue}</span>
                            </div>
                        </div>
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