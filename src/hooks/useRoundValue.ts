import { useAppDispatch } from '../app/hooks';

import { setPriceMinCounter, setPriceMaxCounter } from '../app/slices/inputRangeSlice';

// /. imports

interface propTypes {
    inputRangeMinValue: number,
    inputRangeMaxValue: number,
    inputRangeTotal: number
}

// /. interfaces

export function useRoundValue() {
    const dispatch = useAppDispatch();

    const defineRoundedNumber = (props: propTypes) => {

        const { inputRangeMinValue, inputRangeMaxValue, inputRangeTotal } = props;

        if (inputRangeMaxValue === inputRangeTotal) {
            dispatch(setPriceMaxCounter(+(inputRangeMaxValue / 1000000).toFixed(0)));
        } else {
            dispatch(setPriceMaxCounter(+(inputRangeMaxValue / 1000000).toFixed(2)));
        }
        if (inputRangeMinValue === 0) {
            dispatch(setPriceMinCounter(+(inputRangeMinValue / 1000000).toFixed(0)));
        } else {
            dispatch(setPriceMinCounter(+(inputRangeMinValue / 1000000).toFixed(2)));
        }
    };
    return { defineRoundedNumber };
}