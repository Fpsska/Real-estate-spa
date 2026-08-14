import { type IselectTemplates } from '../../../entities/cards';

// /. imports

export function filterByQuartal(
    array: IselectTemplates[],
    value: string
): IselectTemplates[] {
    switch (value) {
        case 'End of the year':
            return array;
        case value:
            return array.filter(({ quartalNumber }) => quartalNumber === value);
        default:
            return array;
    }
}
