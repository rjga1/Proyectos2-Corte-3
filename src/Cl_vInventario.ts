import { iProducto } from "./Cl_mProducto.js";
import Cl_vGeneral, { tHTMLElement } from "./tools/Cl_vGeneral.js";

export default class Cl_vInventario extends Cl_vGeneral {
  private btAgregarProducto: HTMLButtonElement;
  private divProductosRegistrados: HTMLDivElement;
  constructor() {
    super({ formName: "inventario" });
    this.btAgregarProducto = this.crearHTMLButtonElement("btAgregarProducto", {
      onclick: () => this.agregarProducto(),
    });
    this.divProductosRegistrados = this.crearHTMLElement(
      "divProductosRegistrados",
      {
        type: tHTMLElement.CONTAINER,
        refresh: () => this.mostrarGruposRegistrados(),
      }
    ) as HTMLDivElement;
  }
  mostrarGruposRegistrados() {
    this.divProductosRegistrados.innerHTML = "";
    let inventario = this.controlador?.productosRegistrados();
    if (!inventario) return;
    inventario.forEach((producto: iProducto) => {
      this.divProductosRegistrados.innerHTML += `<tr>
            <td>${producto.nombre}</td>
            <td>${producto.id}</td>
            <td>${producto.disponibilidad}</td>
        </tr>`;
    });
  }
  agregarProducto() {
    let nombre = prompt("Ingrese el nombre del producto:");
    if (!nombre) return;
    let id = prompt("Ingrese el ID del producto:");
    if (!id) return;
    let disponibilidad = prompt("Ingrese la disponibilidad del producto:");
    if (!disponibilidad) return;
    this.controlador!.agregarProducto({
      productoData: {
        nombre: nombre,
        id: Number(id),
        disponibilidad: Number(disponibilidad),
      },
      callback: (error: string | false) => {
        if (error) alert(error);
        this.refresh();
      },
    });
  }
}
