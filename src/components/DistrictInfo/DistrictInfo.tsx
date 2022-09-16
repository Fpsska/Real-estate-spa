import React from 'react';

import { BiWalk } from 'react-icons/bi';
import { IoCarSportOutline } from 'react-icons/io5';

import './district.scss';

// /. imports

interface propTypes {
    complexName: string;
    subwayName: string;
    walkTime: string;
    wayMoving: string;
    isActive: boolean;
}

// /. interfaces

const DistrictInfo: React.FC<propTypes> = (props) => {

    const {
        complexName,
        subwayName,
        walkTime,
        wayMoving,
        isActive
    } = props;

    return (
        <div className="district">
            <div className={isActive ? 'district__area active' : 'district__area'}>
                <div className="district__distance">
                    <h4 className="district__complex">{complexName}</h4>
                    <ul className="district__description">
                        <li className="district__subway">{subwayName}</li>
                        <li className="district__icon">
                            {wayMoving === 'walk' ? <BiWalk size={16} /> : <IoCarSportOutline size={16} />}
                        </li>
                        <li className="district__time">{walkTime}</li>
                    </ul>
                </div>
                <a className="button button--district" href="#" onClick={e => e.preventDefault()}>Apartments</a>
            </div>
        </div>
    );
};

export default DistrictInfo;