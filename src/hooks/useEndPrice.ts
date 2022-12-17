import { useAppDispatch } from '../app/hooks';

import { setCurrentInputRangeMaxValue } from '../app/slices/inputRangeSlice';

// /. imports

interface propTypes {
    inputMaxValue: number;
    inputRangeMinValue: number;
    inputRangeTotal: number;
    priceGap: number;
}

// /. interfaces

export function useEndPrice() {
    const dispatch = useAppDispatch();

    const defineEndPrice = (props: propTypes) => {
        const { inputMaxValue, inputRangeMinValue, inputRangeTotal, priceGap } =
            props;

        if (
            inputMaxValue - inputRangeMinValue >= priceGap &&
            inputMaxValue <= inputRangeTotal
        ) {
            dispatch(setCurrentInputRangeMaxValue(inputMaxValue));
        }
        if (inputMaxValue >= inputRangeTotal || !inputMaxValue) {
            dispatch(setCurrentInputRangeMaxValue(inputRangeTotal));
        }
    };
    return { defineEndPrice };
}
