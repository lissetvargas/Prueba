import { Component, OnInit } from '@angular/core';

//Services
import { InfopaisesService } from '../../services/infopaises.service';
//Models
import { Paises } from '../../models/paises.model';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {

  paises: Paises[] = []

  constructor(
    private infoPaises: InfopaisesService
  ) { }

  ngOnInit(): void {
    this.GetInfo();
  }

  GetInfo() {
    this.infoPaises.GetInfoPaises().subscribe( (resp) => {
      this.paises = resp;
    });
  }

  eliminarPais(id: string){
    this.infoPaises.DeletePais(id).subscribe(() =>{
      this.paises = this.paises.filter(pais => pais.id != id);
    });
  }
}
