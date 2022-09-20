export function filterByQuartal(array: any[], filterProp: string): any[] {
    switch (filterProp) {
        case 'End of the year':
            return array;
        case filterProp:
            return array.filter(({ quartalNumber }) => quartalNumber === filterProp);
        default:
            return array;
    }
};