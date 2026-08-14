import { type IselectTemplates } from '../../../entities/cards';

// /. imports

export function filterDataByPrice(
    array: IselectTemplates[],
    minPrice: number,
    maxPrice: number
): IselectTemplates[] {
    return array.filter((plot) =>
        plot.prices.some(
            ({ value }) =>
                value >= minPrice / 1_000_000 && value <= maxPrice / 1_000_000
        )
    );
}
