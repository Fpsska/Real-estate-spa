import React, { useEffect } from "react";
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
    const { enteredSearchValue,
        setEnteredSearchValue,
        sortedItems, } = useFilter(cards, "subwayName")
    const dispatch = useDispatch()
    // 
    useEffect(() => {
        setTimeout(() => {
            dispatch(switchDataLoadingStatus(false))
        }, 2500);
    }, [])
    return (
        <div className="page">
            <h1 className="page__title">НАЙДЕНО 12 ПРОЕКТОВ</h1>
            <div className="page__wrapper">
                <div className="page__burger">
                    {isBurgerOpened ? <Burger /> : <></>}
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