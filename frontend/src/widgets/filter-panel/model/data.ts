export interface IButtonTemplateConfig {
    id: number;
    text: string;
}

export interface ICheckboxTemplateConfig {
    id: number;
    labelText: string;
}

// /. interfaces

export const buttonTemplates: IButtonTemplateConfig[] = [
    {
        id: 1,
        text: 'Studio'
    },
    {
        id: 2,
        text: '1'
    },
    {
        id: 3,
        text: '2'
    },
    {
        id: 4,
        text: '3+'
    }
];

export const checkboxTemplates: ICheckboxTemplateConfig[] = [
    {
        id: 1,
        labelText: '3 quarter 2023'
    },
    {
        id: 2,
        labelText: '4 quarter 2023'
    },
    {
        id: 3,
        labelText: '1 quarter 2024'
    },
    {
        id: 4,
        labelText: 'End of the year'
    }
];
