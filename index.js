//para test de arrays

const provincias = ['Álava','Badajoz','Cáceres','Girona','Huelva','Jaén','La Rioja','Madrid','Navarra'];
const dias = ['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo'];


//para matcher string con expresiones regulares

const expReg = {
    responseOK: 'Response OK',
    responseFAIL: 'Response FAIL',
    email: 'testing@test.com',
    telefono: '919784852'
}

// para test unitarios y mayor, igual o menor

export const sumar = (a, b) => a + b;
export const restar = (a, b) => a - b;
export const multiplicar = (a, b) => a * b;
export const dividir = (a, b) => a / b;

//para booleano, undefined y null

export const isNull = () => null;
export const isFalse = () => false;
export const isTrue = () => true;
export const isUndefined = () => undefined;

// para test de arrays

export const arrProvincias = () => provincias;
export const arrDias = () => dias;

// para matcher string

export const objExpReg = () => expReg;
