import { useDispatch } from "react-redux";
import { setCurrentInputRangeMinValue } from "../app/slices/inputRangeSlice";

export function useSetStartPrice() {
    const dispatch = useDispatch()

    const defineStartPrice = (inputMinValue: number, inputRangeMaxValue: number, inputRangeTotal: number, priceGap: number) => {
        if (inputRangeMaxValue - inputMinValue >= priceGap && inputMinValue <= inputRangeTotal) {
            dispatch(setCurrentInputRangeMinValue(inputMinValue))
        }
        if (inputMinValue > inputRangeMaxValue - priceGap) {
            dispatch(setCurrentInputRangeMinValue(inputRangeMaxValue - priceGap))
        }
        if (!inputMinValue) {
            dispatch(setCurrentInputRangeMinValue(0))
        }
    }
    return { defineStartPrice }
}