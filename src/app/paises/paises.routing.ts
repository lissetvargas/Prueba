import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PaisesComponent } from "./components/paises/paises.component";
import { NewpaisComponent } from "./components/newpais/newpais.component";


const routes: Routes = [
    { path: 'paises', component: PaisesComponent },
    { path: 'new', component: NewpaisComponent },
];

@NgModule ({

   imports: [ RouterModule.forChild(routes)],
   exports: [ RouterModule]

})

export class PaisesRoutingModule {}