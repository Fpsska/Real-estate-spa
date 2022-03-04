import React from "react";
import SvgTemplate from "../Common/SvgTemplate";
import "./district.scss"

const DistrictInfo = ({ complexName, subwayName, walkTime }) => {
    return (
        <div className="district__area">
            <div className="district__distance">
                <h4 className="district__complex">{complexName}</h4>
                <span className="district__subway">{subwayName}</span>
                <SvgTemplate id="walk" />
                <span className="district__time">{walkTime}</span>
            </div>
            <button className="district__button">Квартиры</button>
        </div>
    )
}

export default DistrictInfo;