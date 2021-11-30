import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController, AlertController } from '@ionic/angular';
import { Mercado } from 'src/app/app.module';
import { MercadoService } from 'src/app/mercado.service';

@Component({
  selector: 'app-mercado-list',
  templateUrl: './mercado-list.page.html',
  styleUrls: ['./mercado-list.page.scss'],
})
export class MercadoListPage implements OnInit {
  mercados : Mercado[];
  consulta : string;

  constructor(
    public actionSheetController: ActionSheetController,
    public alertController:  AlertController,
    private router: Router,
    private mercadoService : MercadoService
  ) {
    this.mercados = this.mercadoService.getMercados();
  }

  ngOnInit() {
  }

  excluir(mercado: Mercado) {
    this.alertController
      .create({
        header: 'Exclusão',
        message: `Você deseja excluir o game ${mercado.nome}?`,
        buttons: [
          {
            text: 'Sim',
            handler: () => {
              this.mercadoService.remove(mercado.nome);
              this.mercados = this.mercadoService.getMercados();
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
