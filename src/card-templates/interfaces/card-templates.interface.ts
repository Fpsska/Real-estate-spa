interface Iprices {
	id: number;
	value: number;
}

interface IselectTemplates {
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
