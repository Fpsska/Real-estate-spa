import React from 'react';

import SvgTemplate from '../Common/SvgTemplate';

import './district.scss';

// /. imports

interface DistrictInfoPropTypes {
    complexName: string;
    subwayName: string;
    walkTime: string;
    wayMoving: string;
    isActive: boolean;
}

// /. interfaces

const DistrictInfo: React.FC<DistrictInfoPropTypes> = (props) => {

    const { complexName,
        subwayName,
        walkTime,
        wayMoving,
        isActive } = props;
    // 
    return (
        <div className="district">
            <div className={isActive ? 'district__area active' : 'district__area'}>
                <div className="district__distance">
                    <h4 className="district__complex">{complexName}</h4>
                    <span className="district__subway">{subwayName}</span>
                    <SvgTemplate id={wayMoving} />
                    <span className="district__time">{walkTime}</span>
                </div>
                <a className="district__button" href="#" onClick={e => e.preventDefault()}>Квартиры</a>
            </div>
        </div>
    );
};

export default DistrictInfo;