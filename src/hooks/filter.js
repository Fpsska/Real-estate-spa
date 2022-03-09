import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { switchProjectsUndefinedStatus } from "../app/mainSlice";

export function useFilter(items, filterProp) {
  const [enteredSearchValue, setEnteredSearchValue] = useState("");
  const dispatch = useDispatch();

  const sortedItems = enteredSearchValue
    ? items.filter((item) =>
        RegExp(enteredSearchValue, "i").test(item[filterProp])
      )
    : items;

  useEffect(() => {
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
