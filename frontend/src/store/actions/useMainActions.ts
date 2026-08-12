import { useDispatchedActions } from '../hooks';

import {
    switchDataLoadingStatus,
    switchBurgerOpenedStatus,
    switchBurgerFixedStatus
} from '../slices/mainSlice';

// /. imports

const actions = {
    switchDataLoadingStatus,
    switchBurgerOpenedStatus,
    switchBurgerFixedStatus
};

export const useMainActions = () => useDispatchedActions(actions);
