import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { switchDataFilteredStatus, setFilteredOptionData, setCurrentProjectText } from "../../app/slices/filterSlice";
import { setCurrentMinPrice, setCurrentMaxPrice, setCurrentInputRangeMinValue, setCurrentInputRangeMaxValue } from "../../app/slices/inputRangeSlice";
import SvgTemplate from "../Common/SvgTemplate";
import ButtonList from "../Button/ButtonList";
import CheckboxList from "../Checkbox/CheckboxList";
import "./filter.scss"
import { RootState } from "../../app/store"
import { selectTemplateTypes } from "../../Types/filterSliceTypes"

import { useSetProjectText } from "../../hooks/projectText"
import { useSetStartPrice } from "../../hooks/startPrice"

interface FilterPropTypes {
    enteredSearchValue: string;
    setEnteredSearchValue: Function
}

const Filter: React.FC<FilterPropTypes> = ({ enteredSearchValue, setEnteredSearchValue }) => {
    const { isProjectsUndefined, isDataLoading } = useSelector((state: RootState) => state.mainSlice)
    const { selectTemplate, projectText, projectCount } = useSelector((state: RootState) => state.filterSlice)
    const { inputRangeMinValue, inputRangeMaxValue, priceGap, inputRangeTotal } = useSelector((state: RootState) => state.inputRangeSlice)
    // 
    const [filteredData] = useState<selectTemplateTypes[]>(selectTemplate)
    const [counterMinValue, setCounterMinValue] = useState<number>(inputRangeMinValue)
    const [counterMaxValue, setCounterMaxValue] = useState<number>(inputRangeMaxValue)
    // 
    const inputRangeMin = useRef<HTMLInputElement>(null!)
    const inputRangeMax = useRef<HTMLInputElement>(null!)
    const progress = useRef<HTMLDivElement>(null!)
    const inputPriceMin = useRef<HTMLInputElement>(null!)
    const inputPriceMax = useRef<HTMLInputElement>(null!)
    // 
    const { defineProjectText } = useSetProjectText()
    const { defineStartPrice } = useSetStartPrice()
    const dispatch = useDispatch()
    // 


    const handleFormSubmit = (e: React.SyntheticEvent): void => {
        e.preventDefault()
        dispatch(switchDataFilteredStatus(true))
    }

    const inputRangeMinHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const minValue = +e.target.value
        dispatch(setCurrentInputRangeMinValue(minValue))
        dispatch(setCurrentMinPrice(minValue))
        if (((parseInt(inputRangeMax.current.value) - parseInt(inputRangeMin.current.value)) < priceGap)) {
            dispatch(setCurrentInputRangeMinValue(inputRangeMaxValue - priceGap))
        } else {
            progress.current.style.left = (minValue / parseInt(inputRangeMin.current.max)) * 100 + "%"
        }
        inputPriceMin.current.value = ""
    }

    const inputRangeMaxHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const maxValue = +e.target.value
        dispatch(setCurrentInputRangeMaxValue(maxValue))
        dispatch(setCurrentMaxPrice(maxValue))
        if (((parseInt(inputRangeMax.current.value) - parseInt(inputRangeMin.current.value)) < priceGap)) {
            dispatch(setCurrentInputRangeMaxValue(inputRangeMinValue + priceGap))
        } else {
            progress.current.style.right = 100 - (maxValue / parseInt(inputRangeMax.current.max)) * 100 + "%"
        }
        inputPriceMax.current.value = ""
    }

    const inputNumMinHandler = (e: React.ChangeEvent<HTMLInputElement>): void => { // MIN NUMBER INPUT
        const inputMinValue = parseInt(e.target.value.replace(/[^0-9]/g, ''))
        // dispatch(setCurrentMinPrice(inputMinValue))
        defineStartPrice(inputMinValue, inputRangeMaxValue, inputRangeTotal, priceGap)
    }

    const inputNumMaxHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {    // Max NUMBER INPUT
        const inputMaxValue = parseInt(e.target.value.replace(/[^0-9]/g, ''))
        dispatch(setCurrentMaxPrice(inputMaxValue))
        if (inputMaxValue - inputRangeMinValue >= priceGap && inputMaxValue <= inputRangeTotal) {
            dispatch(setCurrentInputRangeMaxValue(inputMaxValue))
        }
        if (inputMaxValue >= inputRangeTotal || !inputMaxValue) {
            dispatch(setCurrentInputRangeMaxValue(inputRangeTotal))
        }
    }

    useEffect(() => {
        progress.current.style.left = (inputRangeMinValue / parseInt(inputRangeMin.current.max)) * 100 + "%"
        progress.current.style.right = 100 - (inputRangeMaxValue / parseInt(inputRangeMax.current.max)) * 100 + "%"
        if (inputRangeMaxValue === inputRangeTotal) {
            setCounterMaxValue(+(inputRangeMaxValue / 1000000).toFixed(0))
        } else {
            setCounterMaxValue(+(inputRangeMaxValue / 1000000).toFixed(2))
        }
        if (inputRangeMinValue === 0) {
            setCounterMinValue(+(inputRangeMinValue / 1000000).toFixed(0))
        } else {
            setCounterMinValue(+(inputRangeMinValue / 1000000).toFixed(2))
        }
    }, [inputRangeMinValue, inputRangeMaxValue])



    useEffect(() => { // setProjectText
        defineProjectText(projectCount, isProjectsUndefined, isDataLoading)
    }, [projectCount, isProjectsUndefined, isDataLoading])


    useEffect(() => {
        dispatch(setFilteredOptionData({ data: filteredData, counterMinValue: +counterMinValue, counterMaxValue: +counterMaxValue }))
    }, [filteredData, counterMinValue, counterMaxValue, inputRangeMinValue, inputRangeMaxValue])

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
                    <input ref={inputPriceMin} onChange={inputNumMinHandler} className="filter__input filter__input--price" type="number" placeholder="Цена от 1 450 000" disabled={isDataLoading ? true : false} />
                    <input ref={inputPriceMax} onChange={inputNumMaxHandler} className="filter__input filter__input--price" type="number" placeholder="до 20 000 000" disabled={isDataLoading ? true : false} />
                    {/*  */}
                    <div className="filter__slider">
                        <div className="slider">
                            <div className="slider__progress" ref={progress}></div>
                        </div>
                    </div>
                    <div className="filter__range">
                        <div className="price-range">
                            <div className="price-range__controls">
                                <input ref={inputRangeMin} onChange={inputRangeMinHandler} className="price-range__input price-range__input--min" type="range" min="0" max={inputRangeTotal} value={inputRangeMinValue} disabled={isDataLoading ? true : false} step="100" />
                                <input ref={inputRangeMax} onChange={inputRangeMaxHandler} className="price-range__input price-range__input--max" type="range" min="0" max={inputRangeTotal} value={inputRangeMaxValue} disabled={isDataLoading ? true : false} step="100" />
                            </div>
                            <div className="price-range__indicators">
                                <span className="price-range__counter price-range__counter--min">{`${counterMinValue} млн. ₽`}</span>
                                <span className="price-range__counter price-range__counter--max">{`${counterMaxValue} млн. ₽`}</span>
                            </div>
                        </div>
                    </div>
                    {/*  */}
                </div>
                <div className="filter__group">
                    <CheckboxList />
                </div>
                <div className="filter__group">
                    <input className="filter__input filter__input--area" type="text" placeholder="Район метро" value={enteredSearchValue} onChange={(e) => setEnteredSearchValue(e.target.value)} disabled={isDataLoading ? true : false} />
                    <SvgTemplate id="search" />
                </div>
            </div>

            <div className="filter__group filter__group--submit">
                <span className="filter__count">{`${isDataLoading ? 0 : isProjectsUndefined ? 0 : projectCount}`} {isDataLoading ? "проектов" : isProjectsUndefined ? "проектов" : projectText}</span>
                <button className="filter__button filter__button--submit" type="submit">Показать</button>
            </div>
        </form >
    )
}

export default Filter;