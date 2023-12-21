import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

//Services
import { InfopaisesService } from '../../services/infopaises.service';
import { Paises } from '../../models/paises.model';


@Component({
  selector: 'app-newpais',
  templateUrl: './newpais.component.html',
  styleUrls: ['./newpais.component.css']
})
export class NewpaisComponent {

  newPaisForm: FormGroup;

  constructor(
    private infoPaises: InfopaisesService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.newPaisForm = this.formBuilder.group({
      Id: [null, Validators.required],
      Nombre: [null, Validators.required],
      Poblacion: [null, Validators.required],
      Capital: [null, Validators.required],
      NombreContinente: [null, Validators.required],
      UrlImagen: [null, Validators.required]
    });
  }

  ValidarFormulario() {
    if (this.newPaisForm.valid) {
      let pais: Paises = {
        id: this.newPaisForm.value.Id,
        countryName: this.newPaisForm.value.Nombre,
        population: this.newPaisForm.value.Poblacion,
        capital: this.newPaisForm.value.Capital,
        continentName: this.newPaisForm.value.NombreContinente,
        img: this.newPaisForm.value.UrlImagen
      }
      
      this.infoPaises.AddPais(pais).subscribe();

      this.router.navigate(['/paises']);
    }
  }

}


