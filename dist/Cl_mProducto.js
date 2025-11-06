export default class Cl_mProducto {
    constructor({ nombre, id, disponibilidad, }) {
        this._nombre = "";
        this._id = 0;
        this._disponibilidad = 0;
        this.nombre = nombre;
        this.id = id;
        this.disponibilidad = disponibilidad;
    }
    set nombre(nombre) {
        this._nombre = nombre.trim().toUpperCase();
    }
    get nombre() {
        return this._nombre;
    }
    set id(id) {
        this._id = id;
    }
    get id() {
        return this._id;
    }
    set disponibilidad(disponibilidad) {
        this._disponibilidad = disponibilidad;
    }
    get disponibilidad() {
        return this._disponibilidad;
    }
    error() {
        // Validar nombre
        if (this._nombre.length === 0)
            return "El nombre del producto no puede estar vacío.";
        // Validar id: Debe ser un número entero positivo
        if (!Number.isInteger(this._id) || this._id < 0)
            alert("El ID del producto es invalido");
        // Validar disponibilidad
        if (!Number.isInteger(this._disponibilidad) || this._disponibilidad === 0 || this._disponibilidad < 0) {
            alert("La disponibilidad debe ser un número entero positivo y mayor a 0");
        }
        return false;
    }
    toJSON() {
        return {
            nombre: this._nombre,
            id: this._id,
            disponibilidad: this._disponibilidad,
        };
    }
}
