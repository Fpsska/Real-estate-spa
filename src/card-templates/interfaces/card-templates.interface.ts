interface Ivalue {
  id: number;
  value: number;
}

interface IselectTemplates {
  id: number;
  ploteName: string;
  housingNumber: string;
  quartalNumber: string;
  value: Ivalue[];
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
