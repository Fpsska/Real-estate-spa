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

export function useEndPrice(): (args: propTypes) => void {
    const dispatch = useAppDispatch();

    const defineEndPrice = (props: propTypes): void => {
        const { inputMaxValue, inputRangeMinValue, inputRangeTotal, priceGap } =
            props;

        if (
            inputMaxValue - inputRangeMinValue >= priceGap &&
            inputMaxValue <= inputRangeTotal
        ) {
            dispatch(setCurrentInputRangeMaxValue(inputMaxValue));
        } else if (inputMaxValue >= inputRangeTotal || !inputMaxValue) {
            dispatch(setCurrentInputRangeMaxValue(inputRangeTotal));
        }
    };

    return defineEndPrice;
}
