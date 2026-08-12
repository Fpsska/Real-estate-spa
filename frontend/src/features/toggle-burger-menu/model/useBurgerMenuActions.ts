import { useDispatchedActions } from '../../../app/store/hooks';

import {
    switchBurgerOpenedStatus,
    switchBurgerFixedStatus
} from './burgerMenuSlice';

// /. imports

const actions = { switchBurgerOpenedStatus, switchBurgerFixedStatus };

export const useBurgerMenuActions = () => useDispatchedActions(actions);
