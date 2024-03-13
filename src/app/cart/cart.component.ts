import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [MatIconModule, NgFor],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  cardProduct: any = [];
  cardKey: any = localStorage.getItem('localcard');
  ngOnInit(): void {
    this.carDetails();
    this.SomTotal();
  }
  carDetails() {
    if (this.cardKey) {
      this.cardProduct = JSON.parse(this.cardKey);
    } else {
      console.log('le tableau nest pas défini');
    }
  }
  // Incrémentation
  prodIncr(id: any, qte: any) {
    for (let i = 0; i < this.cardProduct.length; i++) {
      if (this.cardProduct[i].id === id) {
        if (qte != 5) {
          this.cardProduct[i].qte = parseInt(qte) + 1;
        }
      }
      localStorage.setItem('localcard', JSON.stringify(this.cardProduct));
    }
  }
  prodeIncr(id: any, qte: any) {
    for (let i = 0; i < this.cardProduct.length; i++) {
      if (this.cardProduct[i].id === id) {
        if (qte != 1) {
          this.cardProduct[i].qte = parseInt(qte) - 1;
        }
      }
      localStorage.setItem('localcard', JSON.stringify(this.cardProduct));
    }
  }
  // Addtion de chaque prix
  TOTAL: number = 0;

  SomTotal() {
    if (localStorage.getItem('localcard')) {
      this.cardProduct = JSON.parse(localStorage.getItem('localcard')!);
    this.TOTAL = this.cardProduct.reduce(function(acc : any,val  : any){
        return acc + (val.qte * val.prix)
      }, 0)
    }
  }

  // Supprimer
  remOve(){
    localStorage.removeItem('localcard')
    this.cardProduct = []
    this.TOTAL = 0
  }
}
