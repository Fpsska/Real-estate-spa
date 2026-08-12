import { useDispatchedActions } from '../../../app/store/hooks';

import { switchCheckboxStatus, setCurrentSortOpt } from './quarterFilterSlice';

// /. imports

const actions = { switchCheckboxStatus, setCurrentSortOpt };

export const useQuarterFilterActions = () => useDispatchedActions(actions);
