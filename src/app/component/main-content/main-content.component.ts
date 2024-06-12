import { Component } from '@angular/core';
import {ProductSelectionComponent} from "../product-selection/product-selection.component";
import {ProviderInfoComponent} from "../provider-info/provider-info.component";
import {CompanyInfoComponent} from "../company-info/company-info.component";


@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    ProductSelectionComponent,
    ProviderInfoComponent,
    CompanyInfoComponent
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css'
})
export class MainContentComponent {
  title = 'Sisogprol';
}
