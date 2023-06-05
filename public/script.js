function CargarDatos() {
  let inputId = document.querySelector("#idPizza");
  let url = "http://localhost:3000/pizzaId/" + inputId.value
  let contenedor = document.querySelector("#contenedor");

  axios
      .get(url)
      .then((result) => {
          contenedor.innerHTML = ""
          contenedor.innerHTML += `<ul>
      <li>${result.data.Id}</li>
      <li>${result.data.Nombre}</li> 
      <li>${result.data.Importe}</li>
      <li>${result.data.Descripcion}</li>
      <li>${result.data.LibreGluten}</li>
      </ul>    `
      })
      .catch((error) => {
          console.log(error);
      });
}

function CargarTodo() {
  axios
      .get("http://localhost:3000/api/pizzas")
      .then((result) => {
          console.log(result.data)
          let arr = result.data
          let contenedor = document.querySelector("#listado");
          let Gluten;
          contenedor.innerHTML = ""
          
          arr.map((item) => {
            if (item.LibreGluten==true) {
              Gluten = "Si" 
            }
            else 
            {
               Gluten = "No"
            }
              contenedor.innerHTML += `
              <div class="col-4">
                    <div class="colorCard card border-success mb-3 cardPokemon" style="max-width: 20rem;">
                      <div class="card-header bg-colorCard headCard  ">${item.Id}.  ${item.Nombre} </div>
                       <div class="card-body text-success card-group">
                       <p class="firdo">Importe: $${item.Importe}</p>
                       <p>Descripcion: ${item.Descripcion}</p>
                       <p>Gluten: ${Gluten}</p>
                  </div>
                  <div class="card-footer bg-transparent border-success"> 
                  <button class="btn boton" onclick="Borrar(${item.Id})">Eliminar Pizzeta</button>
                  </div>
                        </div>
                        
                      </div>
                    </div>
                </div>
          
            `
          })
      })
      .catch((error) => {
          console.log(error);
      });
}
function InsertPizza() {
  let nombre = document.getElementById("nombre").value;
  let gluten = document.getElementById("gluten").checked;
  let importe = document.getElementById("importe").value;
  let descripcion = document.getElementById("descripcion").value;
  //let id = document.getElementById("id")
  let cuerpo = {
    "Nombre": nombre,
    "LibreGluten": gluten,
    "Importe": importe,
    "Descripcion":descripcion
  }
  console.log(cuerpo);
  console.log("http://localhost:3000/api/pizzas", cuerpo)
  axios
      .post("http://localhost:3000/api/pizzas/", cuerpo)
      .then((result) => {
          console.log("OK");
          console.log(result.data)
          CargarTodo()
          
      })
      .catch((error) => {
          console.log(error);
      });
}

function UpdatePizza() {
  let id = document.getElementById("id").value;
  let nombre = document.getElementById("nombre").value;
  let gluten = document.getElementById("libreGluten").checked;
  let importe = document.getElementById("importe").value;
  let descripcion = document.getElementById("descripcion").value;
  //let id = document.getElementById("id")

  if (libreGluten==1) {
    libreGluten==true;
  }else{
    libreGluten==false;
  }
  const cuerpo = {
    id:id,
    nombre: nombre,
    libreGluten: gluten,
    importe: importe,
    descripcion:descripcion
  }
  console.log(cuerpo);
  var url='http://localhost:3000/api/pizzas/'+id
  
  axios
      .put(url,cuerpo)
      .then((result) => {
          console.log("OK");
          console.log(result.data)
          console.log(cuerpo)
          CargarTodo()
          listado.innerHTML += `se actualizó la pizza numero: ${id} `
          
          
      })
      .catch((error) => {
          console.log(error);
      });
}

function Borrar(id) {
  let nombre = document.getElementById("nombre")
  //let id = document.getElementById("id")
  console.log("http://localhost:3000/api/pizzas/" + id)
  axios
      .delete("http://localhost:3000/api/pizzas/" + id)
      .then((result) => {
          console.log(result.data)
          CargarTodo()
          
      })
      .catch((error) => {
          console.log(error);
      });
}