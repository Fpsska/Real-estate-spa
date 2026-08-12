import { useCallback } from 'react';

import { useInputRangeActions } from '../../../store/actions';

// /. imports

interface propTypes {
    inputMaxValue: number;
    inputRangeMinValue: number;
    inputRangeTotal: number;
    priceGap: number;
}

// /. interfaces

export function useEndPrice(): (args: propTypes) => void {
    const { setCurrentInputRangeMaxValue } = useInputRangeActions();

    const defineEndPrice = useCallback(
        (props: propTypes): void => {
            const {
                inputMaxValue,
                inputRangeMinValue,
                inputRangeTotal,
                priceGap
            } = props;

            if (
                inputMaxValue - inputRangeMinValue >= priceGap &&
                inputMaxValue <= inputRangeTotal
            ) {
                setCurrentInputRangeMaxValue(inputMaxValue);
            } else if (inputMaxValue >= inputRangeTotal || !inputMaxValue) {
                setCurrentInputRangeMaxValue(inputRangeTotal);
            }
        },
        [setCurrentInputRangeMaxValue]
    );

    return defineEndPrice;
}
