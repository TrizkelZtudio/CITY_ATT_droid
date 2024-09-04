export interface PrevNew {
    titulo_noticia:    string;
    descripcion_breve: string;
    fecha:             string;
    autor:             string;
    portada:           string;
    content:           string;
    goto:              string;
    uid:               string;
}


export interface PreEvent {
    titulo_evento:      string;
    date:               string;
    duracion_evento:    string;
    descripcion_evento: string;
    imagen_evento:      string;
    lugar_evento:       string;
    organizador:        string;
    nombre_boton:       string;
    enlace_boton:       string;
    lp:                 string;
    lat:                number;
    lng:                number;
    uid:                string;
}  


export interface PreAlert {
    titulo_alerta:     string;
    descripcion_breve: string;
    date:              string;
    image:             string;
    btn_name:          string;
    btn_url:           string;
    uid:               string;
}


export interface PreBanner {
    img:   string;
    title: string;
    date:  string;
}


// ____________________________________________________________________

export interface Notice {
    myNews: MyNew[];
    ok:     boolean;
}

export interface MyNew {
    titulo_noticia:    string;
    descripcion_breve: string;
    fecha:             string;
    autor:             string;
    portada:           string;
    uid:               string;
}



export interface Noticiero {
    myNews: Datum[];
    ok:   boolean;
}
export interface myNews {
    content:           Content;
    titulo_noticia:    string;
    descripcion_breve: string;
    fecha:             string;
    autor:             string;
    portada:           string;
    uid:               string;
}
export interface Content {
    txt: string;
    img: string;
}

// ____________________________________________________________________

export interface Eventos {
    Data: Datum[];
    ok:   boolean;
}
export interface Datum {
    titulo_evento:      string;
    date:               string;
    duracion_evento:    string;
    descripcion_evento: string;
    imagen_evento:      string;
    lugar_evento:       string;
    organizador:        string;
    nombre_boton:       string;
    enlace_boton:       string;
    lp:                 string;
    lat:                number;
    lng:                number;
    uid:                string;
}

// ____________________________________________________________________
export interface Banners {
    Data: Datum[];
    ok:   boolean;
}
export interface Datum {
    banner_uno:    string;
    banner_dos:    null;
    banner_tres:   string;
    banner_cuatro: null;
    link_one:      string;
    link_three:    string;
    link_four:     string;
    uid:           string;
}

// ____________________________________________________________________
export interface Alertas {
    Data: Datum[];
    ok:   boolean;
}
export interface Datum {
    titulo_alerta:     string;
    descripcion_breve: string;
    date:              string;
    image:             string;
    btn_name:          string;
    btn_url:           string;
    uid:               string;
}
