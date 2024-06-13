import { Routes } from '@angular/router';
import { GenerarCotizacionComponent } from './component/generar-cotizacion/generar-cotizacion.component';
import { PanelCotizacionesComponent } from './component/panel-cotizaciones/panel-cotizaciones.component';

// import { PersonalComponent } from './component/personal/personal.component';
// import { OrdenesInternamientoComponent } from './component/ordenes-internamiento/ordenes-internamiento.component';
// import { NotificacionesComponent } from './component/notificaciones/notificaciones.component';

export const routes: Routes = [
  // { path: 'personal', component: PersonalComponent },
  { path: 'panel-cotizaciones', component: PanelCotizacionesComponent },
  { path: 'generar-cotizacion', component: GenerarCotizacionComponent },
  // { path: 'ordenes-de-internamiento', component: OrdenesInternamientoComponent },
  // { path: 'notificaciones', component: NotificacionesComponent },
  { path: '', redirectTo: '/panel-cotizaciones', pathMatch: 'full' },
  { path: '**', redirectTo: '/panel-cotizaciones', pathMatch: 'full' }
];
