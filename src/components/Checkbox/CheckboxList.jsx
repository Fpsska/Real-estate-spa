import React, { useEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCurrentQuartalValue,
  setFilteredQuartalData,
  switchDataFilteredStatus
} from "../../app/mainSlice";

const CheckboxList = ({  }) => {
  const { checkboxInputs, selectTemplate, isDataLoading } = useSelector((state) => state.mainSlice);
  const [filteredData, setFilteredData] = useState(selectTemplate)

  const dispatch = useDispatch();
  const input = useRef();
  //
  const list = useMemo(
    () =>
      checkboxInputs.map((item) => {
        // 
        const dataFilter = (e) => {
          const attrValue = e.target.attributes["data-quartal"].value
          if (attrValue === "До конца года") {
            dispatch(setFilteredQuartalData({ filteredData: filteredData, id: item.id, status: !item.isSelected }))
          } else {
            let newSelectItems = [...filteredData].filter(item => item.quartalNumber === attrValue)
            dispatch(setFilteredQuartalData({ filteredData: newSelectItems, id: item.id, status: !item.isSelected }))
          }
        }
        // 
        return (
          <label className="filter__label" key={item.id} ref={input}>
            <input
              type="checkbox"
              className="filter__input filter__input--checkbox"
              data-quartal={item.labelText}
              name="quarter"
              onChange={dataFilter}
              checked={item.isSelected ? true : ""}
              disabled={isDataLoading ? true : ""}
            />
            <span className="filter__checkbox"></span>
            {item.labelText}
            {/* <p>{`status: ${item.isSelected}`}</p> */}
          </label>
        );
      }),
    [checkboxInputs, isDataLoading]
  );

  return <>{list}</>;
};

export default CheckboxList;
