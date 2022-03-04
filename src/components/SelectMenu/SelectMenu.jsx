import React, { useMemo } from "react";
import "./select.scss"

const SelectMenu = ({ selectTemplate }) => {
    const list = useMemo(() => selectTemplate.map(item => {
        return (
            <div className="zone__section" key={item.id}>
                <div className="zone__information">
                    <span className="zone__plate">{item.plateName}</span>
                    <span className="zone__description">{item.description}</span>
                </div>
                <div className="card__select">
                    <select name="select">
                        {
                            item.selectOptions.map(el => {
                                return (
                                    <option value="" key={el.id}>{el.value}</option>
                                )
                            })
                        }
                    </select>
                </div>
            </div>
        )
    }), [selectTemplate])

    return (
        <div className="zone">
            <div className="zone__wrapper">
                {list}
            </div>
        </div>
    )
}

export default SelectMenu;