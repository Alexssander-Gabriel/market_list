import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/app.module';
import { ProdutoService } from 'src/app/produto.service';
import { ActionSheetController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.page.html',
  styleUrls: ['./produto-list.page.scss'],
})

export class ProdutoListPage implements OnInit {
  produtos : Produto[];
  consulta : string;


  constructor(
    private produtoService: ProdutoService,
    public actionSheetController: ActionSheetController,
    public alertController:  AlertController,
    private router: Router
    ) {
      this.produtos = this.produtoService.getProduto();
   }

  ngOnInit() {
  }


  async abrirListaAcao(produto : Produto) {
    
    const actionSheet = await this.actionSheetController.create({
      header: `${produto.descricao}`,
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Editar',
        role: 'destructive',
        icon: 'pencil',
        handler: () => {
          console.log('Editar Clicado');
          this.router.navigate(['/produto-register', produto.id]);
        }
      },{
        text: 'Deletar',
        role: 'destructive',
        icon: 'trash',
        handler:() => {
          console.log('Deletar Clicado');
          this.excluir(produto);
        }
      },
      {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancelar Clicado');
        }
      }]
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }



  excluir(produto: Produto) {
    this.alertController
      .create({
        header: 'Exclusão',
        message: `Você deseja excluir o Produto ${produto.descricao}?`,
        buttons: [
          {
            text: 'Sim',
            handler: () => {
              this.produtoService.remove(produto.descricao);
              this.produtos = this.produtoService.getProduto();
            },
          },
          {
            text: 'Não',
          },
        ],
      })
      .then((alert) => alert.present());
  }

  getPesquisaProduto(consulta : any){
    let nome = consulta.target.value; 
    if (nome && nome.trim() != '' ){
      this.produtos = this.produtoService.getProduto(nome);
     // console.log('Filtrado pelo nome:'+ nome);
    } else {
      this.produtos = this.produtoService.getProduto();
    //  console.log('Não encontrado');
    }
    
  }


}
