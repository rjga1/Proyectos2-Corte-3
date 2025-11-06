import Cl_mProducto, { iProducto } from "./Cl_mProducto.js";

export default class Cl_mInventario {
  private inventario: Cl_mProducto[] = [];

  agregarProducto({
    producto,
    callback,
  }: {
    producto: Cl_mProducto;
    callback: (error: string | false) => void;
  }): void {
    // Validar que el producto no tenga errores internos
    let error = producto.error();
    if (error) {
      callback(error);
      return;
    }

    // Validar que el nombre solo contenga letras (sin espacios, números ni signos)
    if (!/^[A-ZÁÉÍÓÚÑ]+$/.test(producto.nombre)) {
      callback("El nombre del producto solo puede contener letras.");
      return;
    }

    // Validar que no se repita el nombre
    let existeNombre = this.inventario.find(
      (c) => c.nombre === producto.nombre
    );
    if (existeNombre) {
      callback("El producto ya está registrado.");
      return;
    }

    // Validar que no se repita el ID
    let existe = this.inventario.find((c) => c.id === producto.id);
    if (existe) {
      callback("El id del producto ya está registrado.");
      return;
    }

    // Validar que los IDs vayan en orden (1,2,3,...)
    let idEsperado = this.inventario.length + 1;
    if (producto.id !== idEsperado) {
      callback(`El ID debe ser el siguiente en orden: ${idEsperado}`);
      return;
    }

    // Validar que la disponibilidad sea entero (no decimal ni 0)
    if (!Number.isInteger(producto.disponibilidad) || producto.disponibilidad === 0 || producto.disponibilidad < 0) {
      return;
    }
     this.inventario.push(producto);
    callback(false);
  }
  listar(): iProducto[] {
    let lista: iProducto[] = [];
    this.inventario.forEach((producto) => {
      lista.push(producto.toJSON());
    });
    return lista;
  }
}