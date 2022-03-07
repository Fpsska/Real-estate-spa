import React, { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { switchButtonSelectedStatus, setRoomCountValue } from "../../app/mainSlice";
import "./button.scss"

const ButtonList = () => {
    const { buttons } = useSelector(state => state.mainSlice)
    const dispatch = useDispatch()
    // 
    const list = useMemo(() => buttons.map(item => {
        const buttonHandler = (e) => {
            e.preventDefault()
            dispatch(setRoomCountValue(item.text))
            dispatch(switchButtonSelectedStatus({ id: item.id, status: !item.isButtonSelected }))
        }
        return (
            <button className={item.isButtonSelected ? "filter__button active" : "filter__button"} key={item.id} onClick={buttonHandler}>{item.text}</button>
        )
    }), [buttons])

    return <>{list}</>
}

export default ButtonList;