import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { PlatComponent } from './plat/plat.component';
import { MenuComponent } from './menu/menu.component';
import { IdentificationComponent } from './identification/identification.component';


const routes: Routes = [
  { path: '', redirectTo: '/menu', pathMatch: 'full' },
  { path: 'plat/:id', component: PlatComponent },
  { path: 'menu/:search', component: MenuComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'identification', component: IdentificationComponent }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
