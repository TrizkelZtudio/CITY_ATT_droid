// --------------- REPORTS tool ---------------
export interface AttentionThemplate {
    title:  string;
    images: string;
    types:  CategoryTypes;
}

export interface CategoryTypes {
    type1: string[];
    type2: string[];
    type3: string[];
    type4: string[];
    type5: string[];
    type6: string[];
}


export interface Types {
    type1?: string[];
    type2?: string[];
    type3?: string[];
    type4?: string[];
    type5?: string[];
    type6?: string[];
}


export interface ToolType {
    category1?: string;
    category2?: string;
    category3?: string;
    category4?: string;
    category5?: string;
    category6?: string;
    category7?: string;
    category8?: string;
    category9?: string;
    category10?:string;
}
export interface TypeInterface {
    title:  string;
    images?: string;
    type:  string;
}


// --------------- REPORTS FORMAT ---------------

export interface mysReport {
    ok:      boolean;
    usrList: ReporTosend[];
}

export interface ReporTosend {
    report_area : string;
    report_type : string;
    reference   : string;
    col         : string;
    calle       : string;
    num         : string;
    report_info : string;
    report_date : number;
    report_img  : string;
    usrxgeoloc  : Usrxgeoloc;
    usrxgene    : string;
    report_id   : string;
    usrxorigin  : string;
    uid         ?:string;
}
export interface MyReports {
    usrxgeoloc:    Usrxgeoloc;
    report_area:   string;
    report_type:   string;
    reference:     string;
    col:           string;
    calle:         string;
    num:           string;
    report_info:   string;
    report_date:   Date;
    usrxgene:      string;
    report_id:     string;
    report_img:    string;
    report_user:   string;
    usrxorigin:    string;
    xcontact:      string;
    status_report: string;
    uid:           string;
}

export interface Usrxgeoloc {
    lat: number;
    lng: number; 
}