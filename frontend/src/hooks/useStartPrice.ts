import { useAppDispatch } from '../app/hooks';

import { setCurrentInputRangeMinValue } from '../app/slices/inputRangeSlice';

// /. imports

interface propTypes {
    inputMinValue: number;
    inputRangeMaxValue: number;
    inputRangeTotal: number;
    priceGap: number;
}

// /. interfaces

export function useStartPrice(): (args: propTypes) => void {
    const dispatch = useAppDispatch();

    const defineStartPrice = (props: propTypes): void => {
        const { inputMinValue, inputRangeMaxValue, inputRangeTotal, priceGap } =
            props;

        if (
            inputRangeMaxValue - inputMinValue >= priceGap &&
            inputMinValue <= inputRangeTotal
        ) {
            dispatch(setCurrentInputRangeMinValue(inputMinValue));
        } else if (inputMinValue > inputRangeMaxValue - priceGap) {
            dispatch(
                setCurrentInputRangeMinValue(inputRangeMaxValue - priceGap)
            );
        } else if (!inputMinValue) {
            dispatch(setCurrentInputRangeMinValue(0));
        }
    };

    return defineStartPrice;
}
