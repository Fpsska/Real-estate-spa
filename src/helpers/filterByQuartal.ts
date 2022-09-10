export function filterByQuartal(array: any, filterProp: string): any[] {
    switch (filterProp) {
        case 'До конца года':
            return array;
        case filterProp:
            const output = array.filter((eachVal: any) => {
                const opt = eachVal.selectTemplates.some((quartalNumber: any) => quartalNumber === filterProp);
                return opt;
            });
            return output;
        // .filter((item: any) => item.quartalNumber === filterProp)
        // .filter((item: any) => item.selectTemplates.some((el: any) => el.quartalNumber === filterProp))
        default:
            return array;
    }
};