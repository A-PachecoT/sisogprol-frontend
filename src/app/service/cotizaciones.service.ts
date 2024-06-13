import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Cotizaciones } from '../model/cotizaciones';

// Datos de prueba
const COTIZACIONES_DATA: Cotizaciones[] = [
  { id: 1, url: 'https://example.com/cotizacion1.pdf', estado: 'Abierta', fechapedido: new Date('2024-06-11'), fecharecibimiento: new Date('2024-06-15'), precio_total: 1500, id_pedido: 1, id_proveedor: 1, updated_at: new Date('2024-06-11T19:03:09.329793Z') },
  { id: 2, url: 'https://example.com/cotizacion2.pdf', estado: 'Cerrada', fechapedido: new Date('2024-06-12'), fecharecibimiento: new Date('2024-06-16'), precio_total: 3000, id_pedido: 2, id_proveedor: 2, updated_at: new Date('2024-06-12T19:03:09.329793Z') },
  { id: 3, url: 'https://example.com/cotizacion3.pdf', estado: 'En proceso', fechapedido: new Date('2024-06-13'), fecharecibimiento: new Date('2024-06-17'), precio_total: 2500, id_pedido: 3, id_proveedor: 3, updated_at: new Date('2024-06-13T19:03:09.329793Z') },
  { id: 4, url: 'https://example.com/cotizacion4.pdf', estado: 'Finalizada', fechapedido: new Date('2024-06-14'), fecharecibimiento: new Date('2024-06-18'), precio_total: 3500, id_pedido: 4, id_proveedor: 4, updated_at: new Date('2024-06-14T19:03:09.329793Z') },
];

@Injectable({
  providedIn: 'root'
})
export class CotizacionesService {
  private backendUrl:string = 'https://sigsoprol-backend-6c1c1113a8ca.herokuapp.com'
  private cotizacionesUrl = '/api/cotizaciones/all';
  private apiEndpointUrl:string  = this.backendUrl + this.cotizacionesUrl;

  constructor(private http: HttpClient) { }

  getCotizaciones(): Observable<Cotizaciones[]> {
    return this.http.get<Cotizaciones[]>(this.apiEndpointUrl);
    // return of(COTIZACIONES_DATA);
  }

}
