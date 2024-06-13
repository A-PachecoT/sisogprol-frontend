// models/empleado.model.ts
export interface Empleado {
  id: number;
  apellido: string;
  nombre: string;
  correo: string;
  contrasenha: string;
  rol: string;
  estado: string;
  fechadeIngreso: Date;
  updated_at: Date;
}
