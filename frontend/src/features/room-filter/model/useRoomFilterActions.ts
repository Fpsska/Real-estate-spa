import { useDispatchedActions } from '../../../app/store/hooks';

import {
    setRoomCountValue,
    switchButtonSelectedStatus
} from './roomFilterSlice';

// /. imports

const actions = { setRoomCountValue, switchButtonSelectedStatus };

export const useRoomFilterActions = () => useDispatchedActions(actions);
