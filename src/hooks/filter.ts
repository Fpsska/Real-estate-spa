import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  switchProjectsUndefinedStatus,
  setCurrentProjectCount,
} from "../app/mainSlice";


export function useFilter(items: any[], filterProp: string) {
  const [enteredSearchValue, setEnteredSearchValue] = useState<string>("");
  const dispatch = useDispatch();

  const sortedItems = enteredSearchValue
    ? items.filter(
        (item) => RegExp(enteredSearchValue, "i").test(item[filterProp]),
      )
    : items;

  useEffect(() => {
    dispatch(setCurrentProjectCount(sortedItems.length));
    if (sortedItems.length === 0) {
      dispatch(switchProjectsUndefinedStatus(true));
    } else {
      dispatch(switchProjectsUndefinedStatus(false));
    }
  }, [sortedItems, enteredSearchValue]);

  return {
    enteredSearchValue,
    setEnteredSearchValue,
    sortedItems,
  };
}
