export interface usrlocalize{
    coords?:    string
    mediaau?:   string,
    usrauth?:   boolean,    
} 



export interface Geodata {
    rescuexuser: Rescuexuser;
    usrxgene:    string;
    DevcDat:     DevcDAT;
    usrxcuota:   number
    usrxname:    string;
}
export interface DevcDAT {
    osV:          string;
    platformDevc: string;
    modelDevc:    string;
    memoryUse:    string;
    idDevc:       string;
}
export interface Rescuexuser {
    lat:       number;
    lng:       number;
    dayreport: string;
}
