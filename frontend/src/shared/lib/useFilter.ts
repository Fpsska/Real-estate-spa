// TODO: RELOCATE
import { useState } from 'react';

// /. imports

interface propTypes {
    items: any[];
    filterProp: string;
}

// /. interfaces

export function useFilter(props: propTypes): any {
    const { items = [], filterProp } = props;

    const [enteredSearchValue, setEnteredSearchValue] = useState<string>('');

    const filteredItems = enteredSearchValue
        ? items.filter((item) =>
              RegExp(enteredSearchValue.trim(), 'i').test(item[filterProp])
          )
        : items;

    return {
        enteredSearchValue,
        setEnteredSearchValue,
        filteredItems
    };
}
