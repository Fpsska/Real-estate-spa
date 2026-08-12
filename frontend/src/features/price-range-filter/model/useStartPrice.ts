import { useCallback } from 'react';

import { useInputRangeActions } from './useInputRangeActions';

// /. imports

interface propTypes {
    inputMinValue: number;
    inputRangeMaxValue: number;
    inputRangeTotal: number;
    priceGap: number;
}

// /. interfaces

export function useStartPrice(): (args: propTypes) => void {
    const { setCurrentInputRangeMinValue } = useInputRangeActions();

    const defineStartPrice = useCallback(
        (props: propTypes): void => {
            const {
                inputMinValue,
                inputRangeMaxValue,
                inputRangeTotal,
                priceGap
            } = props;

            if (
                inputRangeMaxValue - inputMinValue >= priceGap &&
                inputMinValue <= inputRangeTotal
            ) {
                setCurrentInputRangeMinValue(inputMinValue);
            } else if (inputMinValue > inputRangeMaxValue - priceGap) {
                setCurrentInputRangeMinValue(inputRangeMaxValue - priceGap);
            } else if (!inputMinValue) {
                setCurrentInputRangeMinValue(0);
            }
        },
        [setCurrentInputRangeMinValue]
    );

    return defineStartPrice;
}
