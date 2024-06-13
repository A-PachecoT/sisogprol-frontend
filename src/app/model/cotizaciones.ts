export interface Cotizaciones {
  id: number;
  url: string;
  estado: string;
  fechapedido: Date;
  fecharecibimiento: Date;
  precio_total: number;
  id_pedido: number;
  id_proveedor: number;
  updated_at: Date;
}
