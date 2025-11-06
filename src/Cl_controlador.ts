import Cl_mProducto, { iProducto } from "./Cl_mProducto.js";
import Cl_mInventario from "./Cl_mInventario.js";
import Cl_vInventario from "./Cl_vInventario.js";

export default class Cl_controlador {
  public modelo: Cl_mInventario;
  public vista: Cl_vInventario;
  constructor(modelo: Cl_mInventario, vista: Cl_vInventario) {
    this.modelo = modelo;
    this.vista = vista;
  }
  agregarProducto({
    productoData,
    callback,
  }: {
    productoData: iProducto;
    callback: Function;
  }): void {
    this.modelo.agregarProducto({
      producto: new Cl_mProducto(productoData),
      callback: (error: string | false) => {
        callback(error);
      },
    });
  }
  productosRegistrados(): iProducto[] {
    return this.modelo.listar();
  }
}
