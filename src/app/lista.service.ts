import { Injectable } from '@angular/core';
import { Categoria, Lista, Tipo, Unidade } from './app.module';

@Injectable({
  providedIn: 'root'
})
export class ListaService {
  private lista : Lista[];
  private contador = 2;

  constructor() {
    this.lista = [
      {
        id: 1,
        descricao: "Comprinhas básicas",
        produto: [
            {id: 1,
              descricao:  'Frango Assado',
              categoria : Categoria.A,
              preco: 50.00,
              foto: 'https://www.kitano.com.br/wp-content/uploads/2019/07/SSP_2480-Frango-assado-com-salsa-e-cebolinha-1.jpg',
              unidade : Unidade.UN
             },
             {id: 2,
               descricao:  'Tomate',
               categoria : Categoria.F,
               preco: 8.90,
               foto: 'https://www.drogariaminasbrasil.com.br/media/product/075/extrato-de-tomate-concentrado-sache-fugini-340g-48a.jpg',
               unidade : Unidade.KG,
              },
              {id: 3,
               descricao:  'Arroz Branco',
               categoria : Categoria.A,
               preco: 5.90,
               foto: 'https://statics.angeloni.com.br/super/files/produtos/2132168/2132168_1_zoom.jpg',
               unidade : Unidade.KG,
              }
        ],
        quantidade: 2,
        valorTotal: 0,
        tipo: Tipo.CR 
      }
    ]
   }

   public getLista(){
     return this.lista;
   }


  public remove(nome: string) {
    this.lista = this.lista.filter((lista) => lista.descricao !== nome);
  }

  public save(lista: Lista) {
    if (lista.id) {
      const index = this.lista.findIndex(g => g.id === lista.id);
      this.lista[index] = lista;
    } else {
      const id = this.contador++;
      this.lista.push({ ...lista, id });
    }
  }

  public findById(id: number) {
    return this.lista.find(game => game.id === id);
  }
}
