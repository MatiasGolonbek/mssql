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
            /*if (item.LibreGluten=true) {
              Gluten = "Si" 
            }
            else 
            {
               Gluten = "No"
            }*/
              contenedor.innerHTML += `
              <div class="col-4">
                    <div class="colorCard card border-success mb-3 cardPokemon" style="max-width: 20rem;">
                      <div class="card-header bg-colorCard headCard  ">${item.Id}.  ${item.Nombre} </div>
                       <div class="card-body text-success card-group">
                       <p>Importe: $${item.Importe}</p>
                       <p>Descripcion: ${item.Descripcion}</p>
                       <p>Gluten: ${item.LibreGluten}</p>
                  </div>
                  <div class="card-footer bg-transparent border-success"> 
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
  let nombre = document.getElementById("nombre").value
  let gluten = document.getElementById("gluten").value
  let importe = document.getElementById("importe").value
  let descripcion = document.getElementById("descripcion").value
  console.log("http://localhost:3000/insert?nombre=" + nombre + "&glutenFree=" + gluten + "&importe" + importe + "&descripcion" + descripcion)
  axios
      .post("http://localhost:3000/insert?nombre=" + nombre + "&glutenFree=" + gluten + "&importe" + importe + "&descripcion" + descripcion)
      .then((result) => {
          console.log(result.data)
      })
      .catch((error) => {
          console.log(error);
      });
}