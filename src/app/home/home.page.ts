import { Component } from '@angular/core'
import { NavController } from '@ionic/angular';

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
    {nome: 'Hamburguer', preco: 'R$ 10,00', descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis ligula non mattis aliquet. Nulla sed velit in lectus laoreet fringilla. Integer convallis, nunc id iaculis ultrices, ligula eros varius dui, eu finibus erat ex eget mi. Duis eu arcu ultrices dolor fermentum fringilla non sed magna. Mauris ipsum velit, maximus eget enim ac, euismod ullamcorper justo", imagens: ["hamburguer.png"]},
    {nome: 'Hamburguer', preco: 'R$ 10,00', descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis ligula non mattis aliquet. Nulla sed velit in lectus laoreet fringilla. Integer convallis, nunc id iaculis ultrices, ligula eros varius dui, eu finibus erat ex eget mi. Duis eu arcu ultrices dolor fermentum fringilla non sed magna. Mauris ipsum velit, maximus eget enim ac, euismod ullamcorper justo", imagens: ["hamburguer.png"]},
    {nome: 'Hamburguer', preco: 'R$ 10,00', descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis ligula non mattis aliquet. Nulla sed velit in lectus laoreet fringilla. Integer convallis, nunc id iaculis ultrices, ligula eros varius dui, eu finibus erat ex eget mi. Duis eu arcu ultrices dolor fermentum fringilla non sed magna. Mauris ipsum velit, maximus eget enim ac, euismod ullamcorper justo", imagens: ["hamburguer.png"]},
    {nome: 'Hamburguer', preco: 'R$ 10,00', descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis ligula non mattis aliquet. Nulla sed velit in lectus laoreet fringilla. Integer convallis, nunc id iaculis ultrices, ligula eros varius dui, eu finibus erat ex eget mi. Duis eu arcu ultrices dolor fermentum fringilla non sed magna. Mauris ipsum velit, maximus eget enim ac, euismod ullamcorper justo", imagens: ["hamburguer.png"]}
  ];

  pizzas = [
    {nome: 'Pizza', preco: 'R$ 10,00', descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis ligula non mattis aliquet. Nulla sed velit in lectus laoreet fringilla. Integer convallis, nunc id iaculis ultrices, ligula eros varius dui, eu finibus erat ex eget mi. Duis eu arcu ultrices dolor fermentum fringilla non sed magna. Mauris ipsum velit, maximus eget enim ac, euismod ullamcorper justo", imagens: ["pizza.jpg"]},
    {nome: 'Pizza', preco: 'R$ 10,00', descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis ligula non mattis aliquet. Nulla sed velit in lectus laoreet fringilla. Integer convallis, nunc id iaculis ultrices, ligula eros varius dui, eu finibus erat ex eget mi. Duis eu arcu ultrices dolor fermentum fringilla non sed magna. Mauris ipsum velit, maximus eget enim ac, euismod ullamcorper justo", imagens: ["pizza.jpg"]},
    {nome: 'Pizza', preco: 'R$ 10,00', descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis ligula non mattis aliquet. Nulla sed velit in lectus laoreet fringilla. Integer convallis, nunc id iaculis ultrices, ligula eros varius dui, eu finibus erat ex eget mi. Duis eu arcu ultrices dolor fermentum fringilla non sed magna. Mauris ipsum velit, maximus eget enim ac, euismod ullamcorper justo", imagens: ["pizza.jpg"]},
    {nome: 'Pizza', preco: 'R$ 10,00', descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis ligula non mattis aliquet. Nulla sed velit in lectus laoreet fringilla. Integer convallis, nunc id iaculis ultrices, ligula eros varius dui, eu finibus erat ex eget mi. Duis eu arcu ultrices dolor fermentum fringilla non sed magna. Mauris ipsum velit, maximus eget enim ac, euismod ullamcorper justo", imagens: ["pizza.jpg"]}
  ];

  cachorroes = [
    {nome: 'Cachorrão', preco: 'R$ 10,00', descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis ligula non mattis aliquet. Nulla sed velit in lectus laoreet fringilla. Integer convallis, nunc id iaculis ultrices, ligula eros varius dui, eu finibus erat ex eget mi. Duis eu arcu ultrices dolor fermentum fringilla non sed magna. Mauris ipsum velit, maximus eget enim ac, euismod ullamcorper justo", imagens: ["cachorrao.jpg"]},
    {nome: 'Cachorrão', preco: 'R$ 10,00', descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis ligula non mattis aliquet. Nulla sed velit in lectus laoreet fringilla. Integer convallis, nunc id iaculis ultrices, ligula eros varius dui, eu finibus erat ex eget mi. Duis eu arcu ultrices dolor fermentum fringilla non sed magna. Mauris ipsum velit, maximus eget enim ac, euismod ullamcorper justo", imagens: ["cachorrao.jpg"]},
    {nome: 'Cachorrão', preco: 'R$ 10,00', descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis ligula non mattis aliquet. Nulla sed velit in lectus laoreet fringilla. Integer convallis, nunc id iaculis ultrices, ligula eros varius dui, eu finibus erat ex eget mi. Duis eu arcu ultrices dolor fermentum fringilla non sed magna. Mauris ipsum velit, maximus eget enim ac, euismod ullamcorper justo", imagens: ["cachorrao.jpg"]},
    {nome: 'Cachorrão', preco: 'R$ 10,00', descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis ligula non mattis aliquet. Nulla sed velit in lectus laoreet fringilla. Integer convallis, nunc id iaculis ultrices, ligula eros varius dui, eu finibus erat ex eget mi. Duis eu arcu ultrices dolor fermentum fringilla non sed magna. Mauris ipsum velit, maximus eget enim ac, euismod ullamcorper justo", imagens: ["cachorrao.jpg"]}
  ];

  categorias = [
    {id : 1, nome: "Pizza", produtos: this.pizzas },
    {id : 2, nome: "Hamburger", produtos: this.hamburguers },
    {id : 3, nome: "Cachorrão", produtos: this.cachorroes},
  ]

  constructor(private navCtrl: NavController) {
  }

  public trocarSecao(categoria: any) {
    this.secao = categoria.id;
  }

  public verProduto(produto: any) {
    this.navCtrl.navigateForward('detalhe', {
      queryParams: { produto: produto }
    });
  }
}
