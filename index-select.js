import config from "./dbconfig.js";
import sql from 'mssql';
import Pizza from "./models/pizza.js";
import PizzaService from "./services/pizzas-services.js";
//await testGetAll();
//await testInsert();
await testUpdate();
// await testDelete();
//await testGetById();

async function testGetById(){
    let svc = new PizzaService();
    let pizzita = await svc.getByID(2);

    console.log(pizzita)
}

async function testGetAll(){
    let svc = new PizzaService();
    let pizzita = await svc.getAll();

    console.log(pizzita)
}

async function testInsert(){
    let svc = new PizzaService();
    let nuevaPizza = new Pizza(66, "Pizza", true, 666, "messi");
    let afectados  = await svc.insert(nuevaPizza)
    console.log(afectados)
}
async function testUpdate(){
    let svc = new PizzaService();
    let nuevaPizza = new Pizza(2, "Pizzadddff", true, 100, "dios")
    let afectados  = await svc.update(nuevaPizza)
    console.log(afectados)
}
async function testDelete(){
    let svc = new PizzaService();
    let afectados  = await svc.deleteById(9)
    console.log(afectados)
}

// let pool = await sql.connect(config);
// let result = await pool.request().query("SELECT top 2 * from Pizzas");

// console.log(result.recordsets.length)
// console.log(result.recordsets[0].length)
// console.log(result.recordsets[0])
// console.log(result.recordsets)
// console.log(result.returnValue)
// console.log(result.output)
// console.log(result.rowsAffected)

// process.exit();