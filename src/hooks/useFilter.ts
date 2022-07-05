import { useState, useEffect } from 'react';

import { useAppDispatch } from '../app/hooks';

import {
  switchProjectsUndefinedStatus
} from '../app/slices/mainSlice';
import {
  setCurrentProjectCount
} from '../app/slices/filterSlice';

// /. imports

interface propTypes {
  items: any[],
  filterProp: string
}

export function useFilter(props: propTypes) {

  const { items, filterProp } = props;

  const [enteredSearchValue, setEnteredSearchValue] = useState<string>('');
  const dispatch = useAppDispatch();

  const sortedItems = enteredSearchValue
    ? items.filter(
      (item) => RegExp(enteredSearchValue.trim(), 'i').test(item[filterProp])
    )
    : items;

  useEffect(() => {
    dispatch(setCurrentProjectCount(sortedItems.length));
    sortedItems.length === 0 ? dispatch(switchProjectsUndefinedStatus(true)) : dispatch(switchProjectsUndefinedStatus(false));
  }, [sortedItems]);

  return {
    enteredSearchValue,
    setEnteredSearchValue,
    sortedItems
  };
}
