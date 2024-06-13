export interface ProductosPedidos {
  id: number;
  cantidad: number;
  total: number;
  id_pedido: number;
  id_producto: number;
  created_at: Date;
  updated_at: Date;
}
