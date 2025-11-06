export interface iProducto {
  nombre: string;
  id: number;
  disponibilidad: number;
}
export default class Cl_mProducto {
  private _nombre: string = "";
  private _id: number = 0;
  private _disponibilidad: number = 0;
  constructor({
    nombre,
    id,
    disponibilidad,
  }: {
    nombre: string;
    id: number;
    disponibilidad: number;
  }) {
    this.nombre = nombre;
    this.id = id;
    this.disponibilidad = disponibilidad;
  }
  set nombre(nombre: string) {
    this._nombre = nombre.trim().toUpperCase();
  }
  get nombre(): string {
    return this._nombre;
  }
  set id(id: number) {
    this._id = id;
  }
  get id(): number {
    return this._id;
  }
  set disponibilidad(disponibilidad: number) {
    this._disponibilidad = disponibilidad
  }
  get disponibilidad(): number {
    return this._disponibilidad;
  }
  error(): string | false {
    // Validar nombre
    if (this._nombre.length === 0) return "El nombre del producto no puede estar vacío.";
    
    // Validar id: Debe ser un número entero positivo
  if (!Number.isInteger(this._id) || this._id < 0) 
    alert("El ID del producto es invalido");
  
  // Validar disponibilidad
  if (!Number.isInteger(this._disponibilidad) || this._disponibilidad === 0 || this._disponibilidad < 0) {
    alert("La disponibilidad debe ser un número entero positivo y mayor a 0");
  }
  return false;
}

  toJSON(): iProducto {
    return {
      nombre: this._nombre,
      id: this._id,
      disponibilidad: this._disponibilidad,
    };
}
}
