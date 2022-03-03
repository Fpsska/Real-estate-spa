import React from "react";
import SelectItem from "./SelectItem";
import "./select.scss"

const SelectMenu = () => {
    return (
        <div className="zone">
            <div className="zone__wrapper">
                <SelectItem />
            </div>
        </div>
    )
}

export default SelectMenu;