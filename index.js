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
