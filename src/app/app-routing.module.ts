import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaisesRoutingModule } from './paises/paises.routing';
import { Error404Component } from './paises/components/error404/error404.component';

const routes: Routes = [
  { path: '', redirectTo: '/paises', pathMatch: 'full' },
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PaisesRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
