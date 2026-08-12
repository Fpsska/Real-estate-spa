export { default as cardsReducer } from './model/cardsSlice';
export { useCardsActions } from './model/useCardsActions';
export type {
    Icards,
    IselectTemplates,
    Iprices,
    IswitchCardActiveStatus
} from './model/types';

export {
    cardTemplatesAPI,
    useGetCardTemplatesQuery
} from './api/card-templatesAPI';
