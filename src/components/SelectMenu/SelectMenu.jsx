import React, { useMemo, useEffect } from "react";
import { useSelector } from "react-redux";
import "./select.scss"

const SelectMenu = ({ selectTemplate, isActive }) => {
    // console.log(selectTemplate)
    const list = useMemo(() => selectTemplate.map(item => {
        return (
            <div className="zone__section" key={item.id}>
                <div className="zone__information">
                    <span className="zone__plate">{item.plateName}</span>
                    <span className="zone__description">{`${item.housingNumber} ${item.quartalNumber}`}</span>
                </div>
                <div className="card__select">
                    <select name="select">
                        {
                            item.selectOptions.map(el => {
                                return (
                                    <option value="" key={el.id}>{`от ${el.value} млн. ₽`}</option>
                                )
                            })
                        }
                    </select>
                </div>
            </div>
        )
    }), [selectTemplate])
    return (
        <div className={isActive ? "zone active" : "zone"}>
            <div className="zone__wrapper">
                {list}
            </div>
        </div>
    )
}

export default SelectMenu;