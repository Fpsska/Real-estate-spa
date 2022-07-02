export interface checkboxInputsTypes {
    id: number;
    labelText: string;
    isSelected: boolean;
}

export interface selectTemplateTypes {
    id: number;
    plateName: string;
    housingNumber: string;
    quartalNumber: string;
    value: number;
}

export interface buttonsTypes {
    id: number;
    text: string;
    isButtonSelected: boolean;
}

export interface cardsTypes {
    id: string;
    equipment: string;
    suggestions: string;
    image: string;
    complexName: string;
    subwayName: string;
    walkTime: string;
    wayMoving: string;
    isActive: boolean;
}


export interface switchButtonSelectedStatusTypes {
    id: number;
    status: boolean;
}
export interface setFilteredQuartalDataTypes {
    id: number;
    status: boolean;
    attribute: string;
    data: selectTemplateTypes[];
}
export interface setFilteredOptionDataTypes {
    priceMinCounter: number;
    priceMaxCounter: number;
    data: selectTemplateTypes[];
}
export interface switchCardActiveStatusTypes {
    index: number;
    status: boolean;
}