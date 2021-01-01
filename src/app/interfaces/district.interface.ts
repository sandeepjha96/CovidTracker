
export interface Istateunassigned {
    statecode: string;
    districtData: Idistrictdata;
}
export interface Idistrictdata {
    unassigned: Iunassigned;
}
export interface Iunassigned {
    
    notes: string;
    active: number;
    confirmed: number;
    deceased: number;
    recovered: number;
    delta: Idelta;
}

export interface Idelta {
    confirmed: number;
    deceased: number;
    recovered: number;
}
