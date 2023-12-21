import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

//Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//modules
import { AppRoutingModule } from './app-routing.module';
import { PaisesModule } from './paises/paises.module';
//components
import { AppComponent } from './app.component';
import { InfopaisesService } from './paises/services/infopaises.service';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    PaisesModule,
    BrowserAnimationsModule
  ],
  providers: [
    HttpClient,
    InfopaisesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
