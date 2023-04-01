import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.page.html',
  styleUrls: ['./detalhe.page.scss'],
})
export class DetalhePage implements OnInit {
  pathImg = '../../assets/img/';
  public produto = { nome: ' ', preco: ' ', descricao: " ", imagens: [] };

  public carrinho:any = []

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.produto = params['produto']
    })
  }

  ngOnInit() {
  }

  addProduto(produto: any) {
    this.carrinho.push(produto);
  }

  removeProduto() {
    this.carrinho.pop();
  }

}
