import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFilter } from "../../hooks/filter";
import { switchDataLoadingStatus, setCurrentProjectText } from "../../app/mainSlice";
import Filter from "../Filter/Filter";
import CardList from "../CardList/CardList";
import Banner from "../Banner/Banner";
import Burger from "../Burger/Burger";
import Preloader from "../Common/Preloader/Preloader";

const MainPage = () => {
    const { cards, isProjectsUndefined, isDataLoading, projectText, projectCount } = useSelector((state) => state.mainSlice)
    const { enteredSearchValue,
        setEnteredSearchValue,
        sortedItems, } = useFilter(cards, "subwayName")
    const dispatch = useDispatch()
    // 
    useEffect(() => {
        if (projectCount >= 5 || projectCount === 0 || isProjectsUndefined || isDataLoading) {
            dispatch(setCurrentProjectText("проектов"))
        }
        if (projectCount >= 2 || projectCount <= 4) {
            dispatch(setCurrentProjectText("проекта"))
        }
        if (projectCount === 1) {
            dispatch(setCurrentProjectText("проект"))
        }
    }, [projectCount, isProjectsUndefined, isDataLoading])

    useEffect(() => {
        setTimeout(() => {
            dispatch(switchDataLoadingStatus(false))
        }, 1500);
    }, [])
    return (
        <div className="page">
            <h1 className="page__title">{`найдено ${isDataLoading ? 0 : isProjectsUndefined ? 0 : projectCount}`} {isDataLoading ? "проектов" : isProjectsUndefined ? "проектов" : projectText}</h1>
            <div className="page__wrapper">
                <div className="page__burger">
                    <Burger />
                </div>
                <div className="page__content">
                    <div className="page__list">
                        {isDataLoading ?
                            <Preloader />
                            :
                            isProjectsUndefined
                                ?
                                <h2 className="page__title page__title--result">Совпадений не найдено</h2>
                                :
                                <CardList sortedItems={sortedItems} />
                        }
                    </div>
                    <Banner />
                </div>
                <div className="page__aside">
                    <Filter enteredSearchValue={enteredSearchValue} setEnteredSearchValue={setEnteredSearchValue} />
                </div>
            </div>
        </div>
    )
}

export default MainPage;