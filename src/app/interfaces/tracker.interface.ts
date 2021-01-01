export interface Itracker {
success: Boolean;
data : Idata;
lastRefreshed: string;
lastOriginUpdate: string;
}

export interface Idata {
    source: string;
    lastRefreshed: string;
    total: Itotal;
    statewise: IStatewise[];
}

export interface Itotal {
    confirmed: number;
    recovered: number;
    deaths: number;
    active: number;
}

export interface IStatewise { 
    state: string;
    confirmed: number;
    recovered: number;
    deaths: number;
    active: number;

}


