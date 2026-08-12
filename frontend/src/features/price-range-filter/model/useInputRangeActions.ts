import { useDispatchedActions } from '../../../app/store/hooks';

import {
    setCurrentMinPrice,
    setCurrentMaxPrice,
    setCurrentInputRangeMinValue,
    setCurrentInputRangeMaxValue,
    setPriceMinCounter,
    setPriceMaxCounter
} from './priceRangeFilterSlice';

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
