import express from "express";
import cors from "cors";
import PizzaService from "./services/pizzas-services.js";
const app  = express();
const port = 3000;

app.get('/', async (req, res) => {
    let svc = new PizzaService();
    let pizzita = await svc.getAll();
      res.send(pizzita);
})

app.get('/:id', async (req, res) => {
    let svc = new PizzaService();
    let pizzita = await svc.getByID(req.params.id);
      res.send(pizzita);
})

app.delete('/:id', async (req, res) => {
    let svc = new PizzaService();
    let pizzita = await svc.deleteById(req.params.id);
      res.send(pizzita);



})

/*app.put('/update/:id/:nombre/:libregluten/:importe/:descripcion', async(req, res) => {
    let svc = new PizzaService();
    let nuevaPizza = new Pizza(2, "Pizzadddff", true, 100, "dios")
    let afectados  = await svc.update(nuevaPizza);
    res.send(afectados);
})*/

app.post('/insert/:nombre/:libregluten/:importe/:descripcion', async(req, res) => {
    try{
    let svc = new PizzaService();
    let afectados  = await svc.insert(req.params.Nombre, req.params.LibreGluten, req.params.Importe, req.params.Descripcion)
    res.send(afectados)
    }catch(error){
        res.send("error");
    }
})

app.listen(port,()=>{
    console.log('listening on port');
})

