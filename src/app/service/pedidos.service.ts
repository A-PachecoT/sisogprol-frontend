import { Injectable } from '@angular/core';
import {Pedido} from "../model/pedido";
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";

const PEDIDOS_DATA: Pedido[] = [
  { id: 1, estado: 'Pendiente', descripcion: 'Pedido 1', name: 'Pedido Uno', id_empleado: 1, fechacreacion: new Date('2024-06-11T19:03:08.384082Z'), updated_at: new Date('2024-06-11T19:03:08.384082Z') },
  { id: 2, estado: 'Completado', descripcion: 'Pedido 2', name: 'Pedido Dos', id_empleado: 2, fechacreacion: new Date('2024-06-12T19:03:08.384082Z'), updated_at: new Date('2024-06-12T19:03:08.384082Z') },
  { id: 3, estado: 'En proceso', descripcion: 'Pedido 3', name: 'Pedido Tres', id_empleado: 3, fechacreacion: new Date('2024-06-13T19:03:08.384082Z'), updated_at: new Date('2024-06-13T19:03:08.384082Z') },
  { id: 4, estado: 'Cancelado', descripcion: 'Pedido 4', name: 'Pedido Cuatro', id_empleado: 4, fechacreacion: new Date('2024-06-14T19:03:08.384082Z'), updated_at: new Date('2024-06-14T19:03:08.384082Z') },
];

@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  constructor(private http: HttpClient) { }

  getPedido(id_pedido: number): Observable<string> {
    // return this.http.get<Pedido>(`${this.pedidosUrl}/${id}`);
    const pedido = PEDIDOS_DATA.find(p => p.id === id_pedido);
    return of(pedido ? pedido.descripcion : 'Descripción no encontrada');
  }
}
