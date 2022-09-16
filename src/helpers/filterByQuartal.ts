export function filterByQuartal(array: any, filterProp: string): any[] {
    switch (filterProp) {
        case 'End of the year':
            return array;
        case filterProp:
            // const selectTemplateArr = array.map((item: any) => item.selectTemplates).flat();
            // const output = selectTemplateArr.filter((item: any) => item.quartalNumber === filterProp);

            // const output = array.map((item: any) => {
            //     item.selectTemplates.filter(({ quartalNumber }: any) => quartalNumber === filterProp);
            // });

            return array.filter((item: any) => item.quartalNumber === filterProp);

        // console.log('output:', output)

        // return array;
        default:
            return array;
    }
};