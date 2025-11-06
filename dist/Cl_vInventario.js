import Cl_vGeneral, { tHTMLElement } from "./tools/Cl_vGeneral.js";
export default class Cl_vInventario extends Cl_vGeneral {
    constructor() {
        super({ formName: "inventario" });
        this.btAgregarProducto = this.crearHTMLButtonElement("btAgregarProducto", {
            onclick: () => this.agregarProducto(),
        });
        this.divProductosRegistrados = this.crearHTMLElement("divProductosRegistrados", {
            type: tHTMLElement.CONTAINER,
            refresh: () => this.mostrarGruposRegistrados(),
        });
    }
    mostrarGruposRegistrados() {
        var _a;
        this.divProductosRegistrados.innerHTML = "";
        let inventario = (_a = this.controlador) === null || _a === void 0 ? void 0 : _a.productosRegistrados();
        if (!inventario)
            return;
        inventario.forEach((producto) => {
            this.divProductosRegistrados.innerHTML += `<tr>
            <td>${producto.nombre}</td>
            <td>${producto.id}</td>
            <td>${producto.disponibilidad}</td>
        </tr>`;
        });
    }
    agregarProducto() {
        let nombre = prompt("Ingrese el nombre del producto:");
        if (!nombre)
            return;
        let id = prompt("Ingrese el ID del producto:");
        if (!id)
            return;
        let disponibilidad = prompt("Ingrese la disponibilidad del producto:");
        if (!disponibilidad)
            return;
        this.controlador.agregarProducto({
            productoData: {
                nombre: nombre,
                id: Number(id),
                disponibilidad: Number(disponibilidad),
            },
            callback: (error) => {
                if (error)
                    alert(error);
                this.refresh();
            },
        });
    }
}
