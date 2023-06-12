import config from "../dbconfig.js";
import sql from "mssql";


export default class IngredientesXPizzaService{
    getByIDPizza = async (idPizza)=> {
        let returnEntity = null;
        console.log('Estoy en: PizzaService.GetById(id)');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
            .input('pIdPizza', sql.Int, idPizza)
            .query(`
            SELECT
            IngredientesXPizzas.Id AS Id,
            Ingredientes.Id AS Ingrediente,
            Ingredientes.Nombre AS Nombre,
            IngredientesXPizzas.Cantidad AS Cantidad,
            Unidades.Id AS IdUnidad,
            Unidades.Nombre AS Unidad
            FROM IngredientesXPizzas
            INNER JOIN Ingredientes ON IngredientesXPizzas.IdIngrediente = Ingredientes.Id 
            INNER JOIN Unidades ON IngredientesXPizzas.IdUnidad = Unidades.Id where IdPizza = @pIdPizza
            `);
            returnEntity = result.recordsets;
        } catch (error) {
            console.log(error)
            
        }
        return returnEntity;
    }
}