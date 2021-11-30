import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Lista } from 'src/app/app.module';
import { ListaService } from 'src/app/lista.service'

@Component({
  selector: 'app-lista-list',
  templateUrl: './lista-list.page.html',
  styleUrls: ['./lista-list.page.scss'],
})
export class ListaListPage implements OnInit {
  listas : Lista[];

  constructor(
    private alertController : AlertController,
    private listaService : ListaService
  ) {
    this.listas = this.listaService.getLista();
   }

  ngOnInit() {
  }

  excluir(lista: Lista) {
    this.alertController
      .create({
        header: 'Exclusão',
        message: `Você deseja excluir o game ${lista.descricao}?`,
        buttons: [
          {
            text: 'Sim',
            handler: () => {
              this.listaService.remove(lista.descricao);
              this.listas = this.listaService.getLista();
            },
          },
          {
            text: 'Não',
          },
        ],
      })
      .then((alert) => alert.present());
  }

}
