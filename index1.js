import express from "express";
import cors from "cors";
import PizzaService from "./services/pizzas-services.js";
const app  = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.get('/api/pizzas/', async (req, res) => {
    let svc = new PizzaService();
    let pizzita = await svc.getAll();
      res.send(pizzita);
})

app.get('/api/pizzas/:id', async (req, res) => {
    let svc = new PizzaService();
    let pizzita = await svc.getByID(req.params.id);
      res.send(pizzita);
})

app.delete('/api/pizzas/:id', async (req, res) => {
    let svc = new PizzaService();
    let pizzita = await svc.deleteById(req.params.id);
      res.send(pizzita);



})

app.put('/api/pizzas/', async(req, res) => {

    try{
        let svc = new PizzaService();
    let afectados  = await svc.update(cuerpo);
    res.send(afectados);}
    catch(error)
    {
        res.send("error");

    }
})

app.post('/api/pizzas/', async(req, res) => {
    let  cuerpo = req.body;
    console.log(cuerpo);
    res.send("ok");
    return;
    try{
        let svc = new PizzaService();
    let afectados  = await svc.insert(cuerpo);
    res.send(afectados);}
    catch(error)
    {
        res.send("error");

    }
})

app.listen(port,()=>{
    console.log('listening on port');
})

