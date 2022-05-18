import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { PlatComponent } from './plat/plat.component';
import { MenuComponent } from './menu/menu.component';
import { CarteComponent } from './carte/carte.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: '', redirectTo: '/carte', pathMatch: 'full' },
  { path: 'plat/:id', component: PlatComponent }, 
  { path: 'menu/:id', component: MenuComponent },
  { path: 'carte', component: CarteComponent },
  { path: 'identification', component: LoginComponent }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
