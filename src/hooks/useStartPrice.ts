import { useDispatch } from 'react-redux';

import { setCurrentInputRangeMinValue } from '../app/slices/inputRangeSlice';

// /. imports

interface propTypes {
    inputMinValue: number,
    inputRangeMaxValue: number,
    inputRangeTotal: number,
    priceGap: number
}

// /. interfaces

export function useStartPrice() {
    const dispatch = useDispatch();

    const defineStartPrice = (props: propTypes) => {

        const { inputMinValue, inputRangeMaxValue, inputRangeTotal, priceGap } = props;

        if (inputRangeMaxValue - inputMinValue >= priceGap && inputMinValue <= inputRangeTotal) {
            dispatch(setCurrentInputRangeMinValue(inputMinValue));
        }
        if (inputMinValue > inputRangeMaxValue - priceGap) {
            dispatch(setCurrentInputRangeMinValue(inputRangeMaxValue - priceGap));
        }
        if (!inputMinValue) {
            dispatch(setCurrentInputRangeMinValue(0));
        }

    };
    return { defineStartPrice };
}