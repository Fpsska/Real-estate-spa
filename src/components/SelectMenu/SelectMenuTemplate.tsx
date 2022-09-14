import React from 'react';

// /. imports

interface SelectMenuTemplatePropTypes {
    id: number,
    ploteName: string,
    housingNumber: string,
    quartalNumber: string,
    value: any[]
}

// /. interfaces

const SelectMenuTemplate: React.FC<SelectMenuTemplatePropTypes> = (props) => {

    const {
        id,
        ploteName,
        housingNumber,
        quartalNumber,
        value
    } = props;

    return (
        <div className="zone__section" key={id}>
            <div className="zone__information">
                <span className="zone__plote">{ploteName}</span>
                <span className="zone__description">{`${housingNumber} ${quartalNumber}`}</span>
            </div>
            <div className="zone__select">
                <select name="select">
                    {value.map(item => {
                        return (
                            <option className="select__option" value={item.value} key={item.id}>{`starts at ${item.value} mil. ₽`}</option>
                        );
                    })}
                </select>
            </div>
        </div>
    );
};

export default SelectMenuTemplate;