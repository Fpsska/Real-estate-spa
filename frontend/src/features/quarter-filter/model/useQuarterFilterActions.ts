import { useDispatchedActions } from '../../../app/store/hooks';

import { setCurrentFilterOption } from './quarterFilterSlice';

// /. imports

const actions = { setCurrentFilterOption };

export const useQuarterFilterActions = () => useDispatchedActions(actions);
