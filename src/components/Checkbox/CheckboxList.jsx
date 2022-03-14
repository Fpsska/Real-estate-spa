import React, { useEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCurrentQuartalValue,
  setFilteredQuartalData,
} from "../../app/mainSlice";

const CheckboxList = ({ }) => {
  const { checkboxInputs, selectTemplate, isDataLoading } = useSelector((state) => state.mainSlice);
  const [filteredData] = useState(selectTemplate)
  const dispatch = useDispatch();
  const input = useRef();
  //
  const list = useMemo(
    () =>
      checkboxInputs.map((item) => {
        // 
        const dataFilter = (e) => {
          dispatch(setFilteredQuartalData({ data: filteredData, id: item.id, status: !item.isSelected, attribute: e.target.attributes["data-quartal"].value }))
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
            <p>{`status: ${item.isSelected}`}</p>
          </label>
        );
      }),
    [checkboxInputs, isDataLoading]
  );

  return <>{list}</>;
};

export default CheckboxList;
