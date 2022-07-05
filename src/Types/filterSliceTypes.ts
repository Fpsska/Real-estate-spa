export interface checkboxInputsTypes {
    id: number;
    labelText: string;
    isSelected: boolean;
}

export interface buttonsTypes {
    id: number;
    text: string;
    isButtonSelected: boolean;
}

export interface selectTemplatesTypes {
    id: number;
    plateName: string;
    housingNumber: string;
    quartalNumber: string;
    value: number;
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
    selectTemplates: selectTemplatesTypes[];
}

export interface switchButtonSelectedStatusTypes {
    id: number;
    status: boolean;
}
export interface setFilteredQuartalDataTypes {
    id: number;
    status: boolean;
    attribute: string;
    data: cardsTypes[];
}
export interface setFilteredOptionDataTypes {
    priceMinCounter: number;
    priceMaxCounter: number;
    data: cardsTypes[];
}
export interface switchCardActiveStatusTypes {
    index: number;
    status: boolean;
}