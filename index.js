import { suma, multiply, active, points, title } from "./add.js";

//SIEMPRE SE IMPORTA DESTRUCTORY
//./ CUAANDO ESTA AL LADO
// ../ CUANDO ESTA AFUERA
//CADA QUE  ../../ SE SALE DE UNA CARPETA
//funciones

function hello() {
  return function () {
    return "hola mundo";
  };
}

console.log(hello()()); //dos para buscar funcion dentro de funcion

//funcion parameters
function hello1(name) {
  return "hola" + name;
}

console.log(hello1("Ryan"));
//multiples params
//(es para pasar parametros en el console)
function sumar(w, y = 0) {
  //se la asigna valor por defecto

  return w + y;
}

console.log(sumar());
console.log(sumar(9, 6));
//objetos //valores dentro de objetos>propiedad
const user = {
  name: "ryan",
  apellido: "perez", //propiedades
  edad: 30,
  address: {
    country: "Colomnbia",
    ciudad: "bogota",
    calle: "main street 123",
  },
  friends: ["bandon", "elena"], //lista [v1,v2]
  //arreglo{valor1: "loquesea"m valor2: 12}
  enviarCorreo: function () {
    //metodos
    return "enviando email...";
  },
  flechita: () => {
    return "quionda";
  },
  active: true,
};

console.log(user.address.ciudad);
console.log(user.active);
console.log(user.enviarCorreo()); //Dentro de la funcion sin () para solo que se vea, y con () para ejecutarla
console.log(user.flechita()); //en este caso a la propiedad se le asigna ua arrow function anonima

//Shortand propiety names
const name = "laptop";
const price = 3000;

//objeto es una const que se le asignan llaves y dentro params
const nuevoProducto = {
  name, //si los nombres son los mismos
  price,
};

console.log(nuevoProducto); //sin (ya que no es function)

//MANIPULACION DE DOM --DOCUMENTO GENERADO BY HTML
//Document propiedad para acceder al documento
title = document.createElement("h1");
title.innerText = "Hola mundo con JS";

button = document.createElement("button");
button.innerText = "clickeame";

//event handler interacciones que el nvegador puede escuchar

button.addEventListener("click", () => {
  button.innerText = "clickeado";
  title.innerText = "Texto actualizado con JS";
  //texto interno, texto de la etiqueta
});
document.body.append(title); //append es adjuntar
//propiedad body del documento adjuntar funcion titulo
document.body.append(button);
//objeto azul, funcion o propiedad morado
const usuario = {
  name: "Joe",
  age: 30,
};
//SE DESTRUCTURA CON {} Y SE ESPERA UN OBJETO QUE TENGA ESE VALOR
function creaTitle(usuario) {
  //"" porque es elemento html
  const { name, age } = usuario;
  return "<h1> El nombre del usuario es: " + name + "</h1>";
}
//a las propiedades no se les asigna (), solo a las funciones
//hola.propiedad = , hola.funcion(valorOp)
//INNERHTML ES CUANDO LA FUNCION CONTIENE HTML </>
//EL INNER A MENOS QUE SE SUME, SUSTITUIRA TODO
document.body.innerHTML += creaTitle(usuario);
//Arrays [] js{}
//DESTRUCTORING

function start() {
  return "empezando";
}

console.log(start());


const boton = document.createElement("button");
boton.innerText = "botoneame";

boton.addEventListener("click", function () {
  alert("clickeado");
});

/* TODOS LOS CAMBIOS SE VAN SUMANDO A LA CONSTANTE */

document.body.append(boton);

const returnObject = () => ({ nombre: "Messi" });
const { nombre } = returnObject();
console.log(nombre);

const background = "blue"
const color = "white"
const botonsitoito = document.createElement("button");
botonsitoito.innerText = "holaButon";

//``ES PARA ESCRIBIR STRINGS
const btnAutorizado = true;
//`${PARA VALOR DE JS}`
botonsitoito.style = `background: ${btnAutorizado? background:'red'}; color: ${color};`

botonsitoito.addEventListener("click", () => {
  /* btnAutorizado === true ? alert("Es verdadero") : alert("es falso"); */

  if(!btnAutorizado){
    alert("es verdadero")
  }else alert("es falso")
});
//SIEMPRE SOLO SE LLAMA AL CONST BOTON
//FUNCION AZUL(),METODO MORADO() PROPIEDAD AZUL=
document.body.append(botonsitoito);
//OBJ= {COLOR:"SI"} ARRAY()=>{} FUNCION(){} METODO ARRAY =[]
const names = ['Ryan', 'Joe', 'Marco']
for (let i = 0; i < names.length; i++) {
  const element = names[i];
  console.log(element);
}
//FUNCION() PARAMETRO = METODO(EVENTO OPCIONAL,FUNCION)
const newNames = names.map(function (name) {
  return `hola ${name}`
})
//EL FIND ES LO MISMO PERO DENTRO SE PONE UNA CONDICION SOLO DA EL VALOR
const buscarNames =names.find(function (name) {
  if(name === "Ryan") return name
})
//FILTER CREA UN NUEVO ARREGLO A PARTIR DE LA CONDICION
const filterNames =names.filter(function (name) {
  if(name !== "Ryan") return name
})
//SE PUEDE != Y !== PERO NO !===
//EL MAP TIENE QUE RETORNAR CONST = METODO.map(fAnonima(){return RETORNO})

const newArrNames = ["Marcos", "Pablo", "Jon"]
//METODO AZU()L FUNCION TAMBIEN AZUL() PROPIEDAD ROJO
function hola(){
  return "hola"
}
document.body
console.log(hola);

console.log(newNames);
console.log(names);
console.log(buscarNames);
//CONCAT ES METODO QUE UNE DOS ARRAYS
console.log(names.concat(newArrNames));
//SPREAD OPERATOR CONCATENAR ES SUMAR O UNIR ...OBJ
//[ARREGLOS, ...ElementosARREGLO]
console.log([...names,...newArrNames]);

const objeto1 = {
  name: "Ryan",
  lastName: "Robles",
}
const address = {
  street: "main street 123",
  city: "Tegus",
}
//EN UN OBJETO NORMAL SOLO {} //SOLO LOS UNE PERO SIGUEN EXISTIENDO
const userInfo = {
  ...objeto1, ...address,
}
console.log(userInfo);
//EMASCRIPT MODULES