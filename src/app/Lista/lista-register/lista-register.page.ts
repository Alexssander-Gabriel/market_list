import { Component, OnInit } from '@angular/core';
import { Lista } from 'src/app/app.module';
import { ListaService } from 'src/app/lista.service';

@Component({
  selector: 'app-lista-register',
  templateUrl: './lista-register.page.html',
  styleUrls: ['./lista-register.page.scss'],
})
export class ListaRegisterPage implements OnInit {
  listas : Lista[];

  constructor(
    private listaService: ListaService
  ) {
    this.listas = listaService.getLista();
   }

  ngOnInit() {
  }

}
