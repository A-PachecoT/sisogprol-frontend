import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormField} from "@angular/material/form-field";
import {MatOption, MatSelect} from "@angular/material/select";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import { ProductService } from '../../service/product.service';
import {Producto} from "../../model/producto";
import {DatePipe} from "@angular/common";



@Component({
  selector: 'app-product-selection',
  templateUrl: './product-selection.component.html',
  styleUrls: ['./product-selection.component.css'],
  standalone: true,
  imports: [MatTableModule, ReactiveFormsModule, MatFormField, MatSelect, MatOption, MatInput, MatButton, FormsModule, DatePipe]
})
export class ProductSelectionComponent {
  displayedColumns: string[] = ['id', 'nombre', 'precio', 'categoria', 'created_at', 'updated_at'];
  dataSource: Producto[] = [];

  constructor(private _productService: ProductService) {
  }

  ngOnInit(): void {
    this._productService.getProducts().subscribe(data => {
      this.dataSource = data;
      console.log(data)
    });
  }
}
