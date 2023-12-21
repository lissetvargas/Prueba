import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import { ReactiveFormsModule } from "@angular/forms";

import { PaisesComponent } from './components/paises/paises.component';
import { NewpaisComponent } from './components/newpais/newpais.component';
import { AppRoutingModule } from '../app-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Error404Component } from './components/error404/error404.component';


@NgModule({
  declarations: [
    PaisesComponent,
    NewpaisComponent,
    Error404Component
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ]
})
export class PaisesModule { }
