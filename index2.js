const person ={
  name: "Ryan",
  //OBJ DENTRO DE OBJ
  address: {
    city: "london"
  },
  location :{

  }
}
//OPTIONAL SHANING ?
//POR SI NO SE SABE QUE EXISTE
console.log(person.location?.city);

//ASINCRONIA ASYNC
//THEN ES TIPO CUADNO ESO FINALICE, ENTONCES(FUNCION HACER ALGO)
//CADA BOJETO ES UNA PUBLCIACION
//FETCH>THEN>RESPUESTA>DATA>POST>title o propiedad
const ul = document.createElement("ul")
fetch("https://jsonplaceholder.typicode.com/posts")
  .then(function(respuesta){
    return respuesta.json()
  }).then((data)=>{
    console.log(data);
    data.forEach((post)=>{
      const li = document.createElement("li")
      li.innerText = post.title
      ul.append(li)
    })
    document.body.append(ul)
  })

//PROMESA FETCH, CUANDO TERMINE RETORNAR ESA RESPUESTA EN JSON, Y CUANDO ESO TERMINE MOSTRAR LA DATA
console.log('linea 2');
