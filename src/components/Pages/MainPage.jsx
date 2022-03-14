import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFilter } from "../../hooks/filter";
import { switchDataLoadingStatus } from "../../app/mainSlice";
import Filter from "../Filter/Filter";
import CardList from "../CardList/CardList";
import Banner from "../Banner/Banner";
import Burger from "../Burger/Burger";
import Preloader from "../Common/Preloader/Preloader";

const MainPage = () => {
    const { isBurgerOpened, cards, isProjectsUndefined, isDataLoading } = useSelector((state) => state.mainSlice)
    const [projectText, setProjectText] = useState("проекта")
    const { enteredSearchValue,
        setEnteredSearchValue,
        sortedItems, } = useFilter(cards, "subwayName")
    const dispatch = useDispatch()
    // 
    useEffect(() => {
        if (cards.length >= 5 || cards.length === 0 || isProjectsUndefined) {
            setProjectText("проектов")
        }
        if (cards.length === 1) {
            setProjectText("проект")
        }
    }, [cards, isProjectsUndefined, isDataLoading])

    useEffect(() => {
        setTimeout(() => {
            dispatch(switchDataLoadingStatus(false))
        }, 1500);
    }, [])
    return (
        <div className="page">
            {
                isDataLoading ?
                    <h1 className="page__title">найдено 0 проектов</h1>
                    :
                    isProjectsUndefined
                        ?
                        <h1 className="page__title">найдено 0 проектов</h1>
                        :
                        <h1 className="page__title">{`НАЙДЕНО ${cards.length} ${projectText}`}</h1>
            }
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