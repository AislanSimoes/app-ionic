import { Component } from '@angular/core'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  pathImg = '../../assets/img/';
  slideOpts = {
    slidesPerView: 2
  }

  public secao = 1;

  hamburguers = [
    {nome: 'Hamburguer', preco: 'R$ 10,00', imagem: "hamburguer.png"},
    {nome: 'Hamburguer', preco: 'R$ 10,00', imagem: "hamburguer.png"},
    {nome: 'Hamburguer', preco: 'R$ 10,00', imagem: "hamburguer.png"},
    {nome: 'Hamburguer', preco: 'R$ 10,00', imagem: "hamburguer.png"}
  ];

  pizzas = [
    {nome: 'Pizza', preco: 'R$ 10,00', imagem: "pizza.jpg"},
    {nome: 'Pizza', preco: 'R$ 10,00', imagem: "pizza.jpg"},
    {nome: 'Pizza', preco: 'R$ 10,00', imagem: "pizza.jpg"},
    {nome: 'Pizza', preco: 'R$ 10,00', imagem: "pizza.jpg"}
  ];

  cachorroes = [
    {nome: 'Cachorrão', preco: 'R$ 10,00', imagem: "cachorrao.jpg"},
    {nome: 'Cachorrão', preco: 'R$ 10,00', imagem: "cachorrao.jpg"},
    {nome: 'Cachorrão', preco: 'R$ 10,00', imagem: "cachorrao.jpg"},
    {nome: 'Cachorrão', preco: 'R$ 10,00', imagem: "cachorrao.jpg"}
  ];

  categorias = [
    {id : 1, nome: "Pizza", produtos: this.pizzas },
    {id : 2, nome: "Hamburger", produtos: this.hamburguers },
    {id : 3, nome: "Cachorrão", produtos: this.cachorroes},
  ]

  constructor() {
  }

  public trocarSecao(categoria: any) {
    this.secao = categoria.id;
  }
}
