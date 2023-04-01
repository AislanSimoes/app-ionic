import { Component } from '@angular/core'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  pathImg = '../../assets/img/';

  hamburguers = [
    {nome: 'Hamburguer', preco: 'R$ 10,00', imagem: ""},
    {nome: 'Hamburguer', preco: 'R$ 10,00', imagem: ""},
    {nome: 'Hamburguer', preco: 'R$ 10,00', imagem: ""},
  ];

  constructor() {
  }

}
