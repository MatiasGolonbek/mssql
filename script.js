function CargarDatos() {
    let inputId = document.querySelector("#idPizza");
    let url = "http://localhost:3000/pizzaId/" + inputId.value
    let contenedor = document.querySelector("#listado");

    axios
        .get(url)
        .then((result) => {
            contenedor.innerHTML = ""
            contenedor.innerHTML += `<ul>
        <li>${result.data.id}</li>
        <li>${result.data.nombre}</li> 
        <li>${result.data.importe}</li>
        <li>${result.data.descripcion}</li>
        <li>${result.data.libreGluten}</li>
        </ul>    `
        })
        .catch((error) => {
            console.log(error);
        });
}

function CargarTodo() {
    axios
    .get("http://localhost:3000/")
    .then((result) => {
      const pizzas = result.data.results;

      pizzas.map((pizza, index) => {
        const { nombre, url } = pizza;

        document.querySelector("#listado").innerHTML += `
         <div class="col-4">
          <div class="colorCard card border-success mb-3 cardPokemon" style="max-width: 20rem;">
            <div class="card-header bg-colorCard headCard  ">${nombre} </div>
             <div class="card-body text-success card-group">
         
          
        </div>
        <div class="card-footer bg-transparent border-success"> 
        <div id="${url}"> 
        <button class="btn boton" onclick="DetallePokemon('${url}')">Ver detalle</button>
        </div>
              </div>
            </div>
          </div>
      </div>
      `;
      });
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