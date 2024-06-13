import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { CotizacionesService } from '../../service/cotizaciones.service'
import { PedidosService} from "../../service/pedidos.service";
import { Cotizaciones } from '../../model/cotizaciones';
import { Pedido } from '../../model/pedido';
import {CurrencyPipe, DatePipe} from "@angular/common";
import {MatAnchor, MatButton} from "@angular/material/button";

@Component({
  selector: 'app-panel-cotizaciones',
  templateUrl: './panel-cotizaciones.component.html',
  styleUrls: ['./panel-cotizaciones.component.css'],
  standalone: true,
  imports: [MatTableModule, DatePipe, CurrencyPipe, MatButton, MatAnchor]
})
export class PanelCotizacionesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'estado', 'fechapedido', 'precio_total', 'fecharecibimiento'];
  // displayedColumns: string[] = ['id'];
  dataCotizaciones: Cotizaciones[] = [];
  dataPedidos: Pedido[] = [];

  constructor(private _cotizacionesService: CotizacionesService, private pedidosService: PedidosService) { }

  ngOnInit(): void {
    this._cotizacionesService.getCotizaciones().subscribe(data => {
      this.dataCotizaciones = data;
      console.log(data);
    });
  }

}
