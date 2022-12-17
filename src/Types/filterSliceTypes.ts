export interface IcheckboxTemplates {
    id: number;
    labelText: string;
    isSelected: boolean;
}

export interface IbuttonTemplates {
    id: number;
    text: string;
    isButtonSelected: boolean;
}

export interface Iprices {
    id: number;
    value: number;
}

export interface IselectTemplates {
    id: number;
    ploteName: string;
    housingNumber: string;
    quartalNumber: string;
    prices: Iprices[];
}

export interface Icards {
    id: string;
    equipment: string;
    suggestions: string;
    image: string;
    complexName: string;
    subwayName: string;
    walkTime: string;
    wayMoving: string;
    isActive: boolean;
    selectTemplates: IselectTemplates[];
}

// /. state

export interface IswitchButtonSelectedStatus {
    id: number;
    status: boolean;
}
export interface IsetFilteredQuartalData {
    id: number;
    status: boolean;
    attribute: string;
    data: Icards[];
}
export interface IsetFilteredOptionData {
    priceMinCounter: number;
    priceMaxCounter: number;
    data: Icards[];
}
export interface IswitchCardActiveStatus {
    id: string;
    quantity: number;
}

// /. actions
