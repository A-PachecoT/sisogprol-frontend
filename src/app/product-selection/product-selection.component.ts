import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-product-selection',
  templateUrl: './product-selection.component.html',
  standalone: true,
  imports: [
    FormsModule
  ],
  styleUrls: ['./product-selection.component.css']
})
export class ProductSelectionComponent {
  products = [
    { codigo: 1, descripcion: 'Producto 1', marca: 'Marca 1', med: 'Med 1', cantDisp: 100, cantRequerida: 0, pUnidad: 10, total: 0 },
    { codigo: 2, descripcion: 'Producto 2', marca: 'Marca 2', med: 'Med 2', cantDisp: 200, cantRequerida: 0, pUnidad: 20, total: 0 },
    // Add more products as needed
  ];
}
