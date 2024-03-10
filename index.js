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
document.body.innerHTML = creaTitle(usuario);
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

const botonsitoito = document.createElement("button");
botonsitoito.innerText = "holaButon";
const botonsitoitoState = false;
botonsitoito.addEventListener("click", () => {
  botonsitoitoState===true ? alert("Es verdadero") : alert("es falso");
});

document.body.append(botonsitoito);
