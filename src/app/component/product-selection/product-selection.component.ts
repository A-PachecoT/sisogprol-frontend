import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormField} from "@angular/material/form-field";
import {MatOption, MatSelect} from "@angular/material/select";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";

export interface Product {
  codigo: number;
  descripcion: string;
  marca: string;
  med: string;
  cantDisp: number;
  cantRequerida: number;
  pUnidad: number;
  total: number;
}

const PRODUCT_DATA: Product[] = [
  { codigo: 1, descripcion: 'Producto 1', marca: 'Marca 1', med: 'Med 1', cantDisp: 100, cantRequerida: 0, pUnidad: 10, total: 0 },
  { codigo: 2, descripcion: 'Producto 2', marca: 'Marca 2', med: 'Med 2', cantDisp: 200, cantRequerida: 0, pUnidad: 20, total: 0 },
  { codigo: 3, descripcion: 'Producto 3', marca: 'Marca 3', med: 'Med 3', cantDisp: 150, cantRequerida: 0, pUnidad: 15, total: 0 },
  { codigo: 4, descripcion: 'Producto 4', marca: 'Marca 4', med: 'Med 4', cantDisp: 250, cantRequerida: 0, pUnidad: 25, total: 0 },
];

@Component({
  selector: 'app-product-selection',
  templateUrl: './product-selection.component.html',
  styleUrls: ['./product-selection.component.css'],
  standalone: true,
  imports: [MatTableModule, ReactiveFormsModule, MatFormField, MatSelect, MatOption, MatInput, MatButton, FormsModule]
})
export class ProductSelectionComponent {
  displayedColumns: string[] = ['codigo', 'descripcion', 'marca', 'med', 'cantDisp', 'cantRequerida', 'pUnidad', 'total'];
  dataSource = PRODUCT_DATA;
}
