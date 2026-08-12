import { useCallback } from 'react';

import { useInputRangeActions } from './useInputRangeActions';

// /. imports

interface propTypes {
    inputRangeMinValue: number;
    inputRangeMaxValue: number;
    inputRangeTotal: number;
}

// /. interfaces

export function useRoundValue(): (args: propTypes) => void {
    const { setPriceMinCounter, setPriceMaxCounter } = useInputRangeActions();

    const defineRoundedNumber = useCallback(
        (props: propTypes): void => {
            const { inputRangeMinValue, inputRangeMaxValue, inputRangeTotal } =
                props;

            if (inputRangeMaxValue === inputRangeTotal) {
                setPriceMaxCounter(+(inputRangeMaxValue / 1000000).toFixed(0));
            } else {
                setPriceMaxCounter(+(inputRangeMaxValue / 1000000).toFixed(2));
            }
            if (inputRangeMinValue === 0) {
                setPriceMinCounter(+(inputRangeMinValue / 1000000).toFixed(0));
            } else {
                setPriceMinCounter(+(inputRangeMinValue / 1000000).toFixed(2));
            }
        },
        [setPriceMinCounter, setPriceMaxCounter]
    );

    return defineRoundedNumber;
}
