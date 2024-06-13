import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Producto} from "../model/producto";
import {HttpClient} from "@angular/common/http";

// Datos de prueba
const PRODUCT_DATA: Producto[] = [
  { id: 1, nombre: 'Producto 1', precio: 10, categoria: 'Categoría 1', created_at: new Date(), updated_at: new Date() },
  { id: 2, nombre: 'Producto 2', precio: 20, categoria: 'Categoría 2', created_at: new Date(), updated_at: new Date() },
  { id: 3, nombre: 'Producto 3', precio: 30, categoria: 'Categoría 3', created_at: new Date(), updated_at: new Date() },
  { id: 4, nombre: 'Producto 4', precio: 40, categoria: 'Categoría 4', created_at: new Date(), updated_at: new Date() },
];

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  private backendUrl:string = 'https://sigsoprol-backend-6c1c1113a8ca.herokuapp.com'
  private productoUrl = '/api/producto/all';
  private apiEndpointUrl:string  = this.backendUrl + this.productoUrl;

  getProducts(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.apiEndpointUrl);
    // return of(PRODUCT_DATA); // For debugging when the API is unavailable
  }
}
