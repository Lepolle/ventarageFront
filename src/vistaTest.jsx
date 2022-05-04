fetch('mock.codes/500')
  .then((response) => {
    if (response.ok) {
      console.log('Todo bien');
    } else {
      console.log('Respuesta de red OK pero respuesta de HTTP no OK');
    }
  })
  .catch((error) => {
    console.log('Hubo un problema con la petición Fetch:' + error.message);
  })



fetch("http://127.0.0.1:8000/api/Products/")
  .then((response) => response.json())
	.then((dog) => console.log(dog));



