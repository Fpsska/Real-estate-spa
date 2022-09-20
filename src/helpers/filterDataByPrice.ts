export function filterDataByPrice(array: any[], minPrice: number, maxPrice: number): any[] {
    return array.filter((plot) => plot.prices.some(({ value }: any) => {
        return value >= (minPrice / 1000000).toFixed(2) && value <= (maxPrice / 1000000).toFixed(2);
    }));
};