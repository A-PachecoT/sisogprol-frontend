import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {MatOption} from "@angular/material/core";
import {MatFormField, MatLabel, MatSelect} from "@angular/material/select";
import {MatInput} from "@angular/material/input";

@Component({
  selector: 'app-provider-info',
  templateUrl: './provider-info.component.html',
  standalone: true,
  imports: [
    FormsModule,
    MatOption,
    MatSelect,
    MatLabel,
    MatFormField,
    MatInput
  ],
  styleUrls: ['./provider-info.component.css']
})
export class ProviderInfoComponent {
  selectedProvider: string = '';
  newProvider: boolean = false;
  providerName: string = '';
  providerEmail: string = '';
  providerRUC: string = '';
  providerDistrict: string = '';
  providerAddress: string = '';
  providerPhone: string = '';

  providers = [
    { value: 'provider1', viewValue: 'Proveedor 1' },
    { value: 'provider2', viewValue: 'Proveedor 2' },
    { value: 'provider3', viewValue: 'Proveedor 3' }
  ];
}
