/**
 * Se requiere de una pequeña aplicación que controle un inventario de una tienda,
 * permitiendo registrar los datos de los productos:
 * nombre del producto, ID y disponibilidad.
 * Los IDs de los productos deben ir en orden:
 * 1, 2, 3, 4, 5, 6,... etc
 * Para la disponibilidad debe verificarse:
 * - Que sea un número entero, no puede incluir decimales.
 * - Que sea mayor que 0.

 * La APP debe permitir agregar y listar los productos registrados.
 * - Los 3 datos son obligatorios en cada producto.
 * - Los productos no deben repetirse en el inventario.
 */
import Cl_controlador from "./Cl_controlador.js";
import Cl_mInventario from "./Cl_mInventario.js";
import Cl_vInventario from "./Cl_vInventario.js";
export default class Cl_index {
    constructor() {
        this.modelo = new Cl_mInventario();
        this.vista = new Cl_vInventario();
        let controlador = new Cl_controlador(this.modelo, this.vista);
        this.vista.controlador = controlador;
        this.vista.refresh();
    }
}
