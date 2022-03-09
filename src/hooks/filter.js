import { useState } from "react";

export function useFilter(items, filterProp) {
  const [enteredSearchValue, setEnteredSearchValue] = useState("");
  const sortedItems = enteredSearchValue
    ? items.filter((item) =>
        RegExp(enteredSearchValue, "i").test(item[filterProp])
      )
    : items;
  return {
    enteredSearchValue,
    setEnteredSearchValue,
    sortedItems,
  };
}
