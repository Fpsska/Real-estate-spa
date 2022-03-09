import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Filter from "../Filter/Filter";
import CardList from "../CardList/CardList";
import Banner from "../Banner/Banner";
import Burger from "../Burger/Burger";
import { useFilter } from "../../hooks/filter";

const MainPage = () => {
    const { isBurgerOpened, cards, selectTemplate } = useSelector((state) => state.mainSlice)
    const { enteredSearchValue,
        setEnteredSearchValue,
        sortedItems, } = useFilter(cards, "subwayName")
    // 
    // useEffect(() => {
    //     console.log(enteredSearchValue)
    // },[enteredSearchValue])

    return (
        <div className="page">
            <h1 className="page__title">НАЙДЕНО 12 ПРОЕКТОВ</h1>
            <div className="page__wrapper">
                <div className="page__burger">
                    {isBurgerOpened ? <Burger /> : <></>}
                </div>
                <div className="page__content">
                    <div className="page__list">
                        <CardList sortedItems={sortedItems} />
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