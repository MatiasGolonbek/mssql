import config from "../dbconfig.js";
import sql from 'mssql';

export default class PizzaService 
    {
        getAll = async ()=> {
            let returnEntity = null;
            console.log('Estoy en: PizzaService.GetAll');
            try {
                let pool = await sql.connect(config);
                let result = await pool.request()
                .query('select * from Pizzas');
                returnEntity = result.recordsets[0];
            } catch (error) {
                console.log(error)
                
            }
            return returnEntity;
        }
    
    getByID = async (id)=> {
        let returnEntity = null;
        console.log('Estoy en: PizzaService.GetById(id)');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
            .input('pId', sql.Int, id)
            .query('select * from Pizzas Where id = @pId');
            returnEntity = result.recordsets[0][0];
        } catch (error) {
            console.log(error)
            
        }
        return returnEntity;
    }
    insert = async (nombre,libregluten,importe,descripcion) => {
        let rowsAffected = 0;
        console.log('Estoy en: PizzaService.insert(id)');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
            .input('pNombre' , sql.VarChar, nombre)
            .input('pLibreGluten' , sql.Bit, libreGluten )
            .input('pImporte' , sql.Float, importe )
            .input('pDescripcion' , sql.VarChar, descripcion)

                                .query('insert into Pizzas( Nombre, LibreGluten, Importe, Descripcion) VALUES ( @pNombre, @pLibreGluten, @pImporte, @pDescripcion)');
        rowsAffected = result.rowsAffected;    
        } catch (error) {
            console.log(error); 
        }
        return rowsAffected;
    }

    update = async (pizza) => {
        let rowsAffected = 0;
        console.log('Estoy en: PizzaService.update(pizza)');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pId' , sql.Int, pizza?.id ??'')
                .input('pNombre' , sql.VarChar, pizza?.nombre ??'')
                .input('pLibreGluten' , sql.Bit, pizza?.libreGluten ??'')
                .input('pImporte' , sql.Float, pizza?.importe ??'')
                .input('pDescripcion' , sql.VarChar, pizza?.descripcion ??'')
                .query('update Pizzas set Nombre = @pNombre, LibreGluten = @pLibreGluten, Importe = @pImporte, Descripcion = @pDescripcion WHERE Id = @pId');
        rowsAffected = result.rowsAffected;    
        } catch (error) {
            console.log(error);
        }
        return rowsAffected;
    }


    deleteById = async (id) => {
        let rowsAffected = 0;
        console.log('Estoy en: PizzaService.deleteById(id)');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                                .input('pId', sql.Int, id)
                                .query('DELETE FROM Pizzas WHERE id = @pId');
        rowsAffected = result.rowsAffected;    
        } catch (error) {
            console.log(error);
        }
        return rowsAffected;
    }
}