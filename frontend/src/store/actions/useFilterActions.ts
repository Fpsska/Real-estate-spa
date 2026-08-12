import { useDispatchedActions } from '../hooks';

import {
    setCurrentProjectText,
    setCurrentProjectCount,
    setRoomCountValue,
    setCardsData,
    setSelectTemplatesData,
    setCurrentSortOpt,
    switchCardActiveStatus,
    switchCheckboxStatus,
    switchButtonSelectedStatus
} from '../slices/filterSlice';

// /. imports

const actions = {
    setCurrentProjectText,
    setCurrentProjectCount,
    setRoomCountValue,
    setCardsData,
    setSelectTemplatesData,
    setCurrentSortOpt,
    switchCardActiveStatus,
    switchCheckboxStatus,
    switchButtonSelectedStatus
};

export const useFilterActions = () => useDispatchedActions(actions);
