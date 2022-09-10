export function filterDataByPrice(array: any, minPrice: number, maxPrice: number): any[] {
    return array.filter((item: any) => item.value > minPrice && item.value < maxPrice);
};