import React, { useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCurrentQuartalValue,
} from "../../app/mainSlice";

const CheckboxList = () => {
  const { checkboxInputs } = useSelector((state) => state.mainSlice);
  const dispatch = useDispatch();
  const input = useRef();
  //
  const list = useMemo(
    () =>
      checkboxInputs.map((item) => {
        const quarterInputHandler = (e) => {
          dispatch(
            addCurrentQuartalValue({
              id: item.id,
              attribute: e.target.attributes["data-quartal"].value,
              status: !item.isSelected,
            })
          );
        };
        return (
          <label className="filter__label" key={item.id} ref={input}>
            <input
              type="checkbox"
              className="filter__input filter__input--checkbox"
              data-quartal={item.attrValue}
              name="quarter"
              onChange={quarterInputHandler}
              checked={item.isSelected ? true : ""}
            />
            <span className="filter__checkbox"></span>
            {item.labelText}
            <p>{`status: ${item.isSelected}`}</p>
          </label>
        );
      }),
    [checkboxInputs]
  );

  return <>{list}</>;
};

export default CheckboxList;
