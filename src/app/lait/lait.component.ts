import { Component } from '@angular/core';
import { Donnes } from '../donnes';
import { LaitservicesService } from '../laitservices.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-lait',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './lait.component.html',
  styleUrl: './lait.component.css'
})
export class LaitComponent {
  charcuterieItem: Donnes[] = [];

  constructor(private charcuterie: LaitservicesService) {}
  ngOnInit(): void {
    this.charcuterieItem = this.charcuterie.lait();
  }

  //  onbtnSwitch(btnSwitch : Donnes){
  //   this.charcuterie.ngbutton(btnSwitch)
  //  }
  Incre(item: any) {
    this.charcuterie.incrementation(item);
  }
  decre(item: any) {
    this.charcuterie.décrementation(item);
  }

  itemcard: any = [];

  // Fonction d'ajout de produit au panier
  addCart(category: any) {
    let storageGetItem: any = localStorage.getItem('localcard');

    if (storageGetItem == null) {
      let storageData: any = [];
      storageData.push(category);
      localStorage.setItem('localcard', JSON.stringify(storageData));
    } else {
      let itemid = category.id;
      let index: number = -1;

      this.itemcard = JSON.parse(storageGetItem);

      for (let i = 0; i < this.itemcard.length; i++) {
        if (parseInt(itemid) === parseInt(this.itemcard[i].id)) {
          this.itemcard[i].qte = category.qte;
          index = i;
          break;
        }
      }

      if (index == -1) {
        this.itemcard.push(category);
        localStorage.setItem('localcard', JSON.stringify(this.itemcard));
      } else {
        localStorage.setItem('localcard', JSON.stringify(this.itemcard));
      }
      this.ItemNUM()
    }
  }

  cardItemNUm : number  = 0
  ItemNUM(){
let localString = JSON.parse(localStorage.getItem('localcard')!)
this.cardItemNUm = localString.length
this.charcuterie.laitSubject.next(this.cardItemNUm)

  }
}
