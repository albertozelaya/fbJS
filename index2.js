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
/* fetch("https://jsonplaceholder.typicode.com/posts")
.then(function(respuesta){
  return respuesta.json()
}).then((data)=>{
  console.log(data);
  data.forEach((post)=>{
    const li = document.createElement("li")
    li.innerText = post.title
    ul.append(li) //COMO QUE SE SUMA
  })
  document.body.append(ul)
}) */

//PROMESA FETCH, CUANDO TERMINE RETORNAR ESA RESPUESTA EN JSON, Y CUANDO ESO TERMINE MOSTRAR LA DATA

const ol = document.createElement("ol")
//console.log('linea 2');

//ASYNC AWAIT AWAIT AL LADO DE FETCH ES PARA MARCAR LA ASINCRONIA
const cargarData = async()=>{
  const responde= await fetch("https://jsonplaceholder.typicode.com/posts") //se obtiene info
  const data= await responde.json() //se convierte a json
  
  data.forEach((post)=>{ //por cada post, o sea cada array
    const li = document.createElement("li") //se crea un elemento ol>li
    li.innerText = post.title //dentro se pone el post>titolo --eso se extrae del post
    ol.append(li) //COMO QUE SE SUMA 
  })
  
  document.body.append(ol)
}




cargarData()