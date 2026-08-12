import { useDispatchedActions } from '../../../app/store/hooks';

import {
    switchDataLoadingStatus,
    setCurrentProjectText,
    setCurrentProjectCount,
    setCardsData,
    setSelectTemplatesData,
    switchCardActiveStatus
} from './cardsSlice';

// /. imports

const actions = {
    switchDataLoadingStatus,
    setCurrentProjectText,
    setCurrentProjectCount,
    setCardsData,
    setSelectTemplatesData,
    switchCardActiveStatus
};

export const useCardsActions = () => useDispatchedActions(actions);
