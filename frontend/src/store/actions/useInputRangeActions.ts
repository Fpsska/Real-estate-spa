import { useDispatchedActions } from '../hooks';

import {
    setCurrentMinPrice,
    setCurrentMaxPrice,
    setCurrentInputRangeMinValue,
    setCurrentInputRangeMaxValue,
    setPriceMinCounter,
    setPriceMaxCounter
} from '../slices/inputRangeSlice';

// /. imports

const actions = {
    setCurrentMinPrice,
    setCurrentMaxPrice,
    setCurrentInputRangeMinValue,
    setCurrentInputRangeMaxValue,
    setPriceMinCounter,
    setPriceMaxCounter
};

export const useInputRangeActions = () => useDispatchedActions(actions);
