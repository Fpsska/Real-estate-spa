import React from "react";
import SvgTemplate from "../Common/SvgTemplate";
import "./district.scss"

const DistrictInfo = () => {
    return (
        <div className="district">
            <div className="district__area">
                <div className="district__distance">
                    <h4 className="district__complex">ЖК Выборгский</h4>
                    <span className="district__subway">м. Московская</span>
                    <SvgTemplate id="walk" />
                    <span className="district__time">20 мин</span>
                </div>
                <button className="district__button">Квартиры</button>
            </div>
        </div>
    )
}

export default DistrictInfo;