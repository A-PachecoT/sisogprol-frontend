export interface OrdenCompra {
  id: number;
  url: string;
  fechaenvio: Date;
  precio_total: number;
  id_cotizacion: number;
  id_proveedor: number;
  updated_at: Date;
}
