import { useDispatchedActions } from '../../../app/store/hooks';

import {
    setCurrentInputRangeMinValue,
    setCurrentInputRangeMaxValue
} from './priceRangeFilterSlice';

// /. imports

const actions = {
    setCurrentInputRangeMinValue,
    setCurrentInputRangeMaxValue
};

export const useInputRangeActions = () => useDispatchedActions(actions);
