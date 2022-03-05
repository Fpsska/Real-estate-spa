import React from "react";
import { useSelector } from "react-redux";
import Filter from "../Filter/Filter";
import CardList from "../CardList/CardList";
import Banner from "../Banner/Banner";
import Burger from "../Burger/Burger";

const MainPage = () => {
    const { isBurgerOpened } = useSelector((state) => state.mainSlice)
    // 
    return (
        <div className="page">
            <h1 className="page__title">НАЙДЕНО 12 ПРОЕКТОВ</h1>
            <div className="page__wrapper">
                <div className="page__burger">
                    {isBurgerOpened ? <Burger /> : <></>}
                </div>
                <div className="page__content">
                    <div className="page__list">
                        <CardList />
                    </div>
                    <Banner />
                </div>
                <div className="page__aside">
                    <Filter />
                    <div className="page__group">
                        <span className="page__count">20 проектов</span>
                        <button className="page__button">Показать</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainPage;