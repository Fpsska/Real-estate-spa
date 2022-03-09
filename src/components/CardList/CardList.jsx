import React, { useMemo, useEffect } from "react";
import { useSelector } from "react-redux";
import SelectMenu from "../SelectMenu/SelectMenu";
import DistrictInfo from "../DistrictInfo/DistrictInfo";
import "./card.scss"

const CardList = ({ sortedItems }) => {
    const { filteredQuartalData, isDataFiltered, selectTemplate } = useSelector(state => state.mainSlice)
    // 
    // useEffect(() => {
    //     console.log("selectTemplate /", selectTemplate)
    // }, [selectTemplate])
    // 
    const list = useMemo(() => sortedItems.map(item => {
        return (
            <div className={item.isActive ? "card active" : "card"} key={item.id}>
                <div className="card__wrapper">
                    <div className="card__preview">
                        <img className="card__image" src={require(`../../assets/images/${item.image}`)} alt="area" />
                        <span className="card__clarification card__clarification--equipment">{item.equipment}</span>
                        <span className="card__clarification card__clarification--suggestions">{item.suggestions}</span>
                        <div className="card__broadcast">
                            <div className="card__icon"></div>
                            <button className="card__button">Live</button>
                        </div>
                    </div>
                    <div className="card__information">
                        <div className="card__location">
                            <DistrictInfo complexName={item.complexName} subwayName={item.subwayName} walkTime={item.walkTime} wayMoving={item.wayMoving} isActive={item.isActive} />
                        </div>
                        <div>
                            <SelectMenu isActive={item.isActive} selectTemplate={selectTemplate} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }), [sortedItems, selectTemplate, filteredQuartalData, isDataFiltered])
    return <>{list}</>
}

export default CardList;