import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { PlatComponent } from './plat/plat.component';
import { CarteComponent } from './carte/carte.component';
import { IdentificationComponent } from './identification/identification.component';


const routes: Routes = [
  { path: '', redirectTo: '/carte', pathMatch: 'full' },
  { path: 'plat/:id', component: PlatComponent },
  { path: 'carte', component: CarteComponent },
  { path: 'identification', component: IdentificationComponent }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
