import { useDispatchedActions } from '../../../app/store/hooks';

// import { setActiveCardId } from './cardsSlice';

// /. imports

const actions = {};

export const useCardsActions = () => useDispatchedActions(actions);
