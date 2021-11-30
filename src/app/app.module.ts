import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, Ng2SearchPipeModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}

export enum Categoria{
  H = 'Higiene',
  A = 'Alimento',
  C = 'Cosmético',
  L = 'Limpeza',
  F = 'Frutas e Legumes',
  O = 'Outros'
}

export enum Unidade{
  PC = 'Peça',
  KG = 'Kilo',
  CX = 'Caixa',
  SC = 'Saco',
  GR = 'Gramas',
  MT = 'Metros',
  UN = 'Unidade'
}


export interface Produto {
  id: number;
  descricao: string;
  categoria : Categoria;
  preco: number;
  foto: string;
  unidade : Unidade;
}

export interface Lista {
  id: number;
  descricao: string;
  produto: Produto[];
  quantidade: number;
  valorTotal: number;
  tipo: Tipo; 
}

export enum Tipo{
  RA = 'Rancho',
  RE = 'Receita',
  CR = 'Compras Rapidas',
}

export interface Mercado {
  id: number;
  nome: string;
  endereco : string;
  contato: string;
  foto: string;
  atendimento : Atendimento;
}

export enum Atendimento{
  FS = 'Finais de Semana',
  FF = 'Finais de Semana e Feriados',
  SA = 'Segunda a Sexta'
}