import { Injectable } from '@angular/core';
import { Donnes } from './donnes';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LaitservicesService {
  constructor() {}

  laits: Donnes[] = [
    {
      id: 30,
      nom: ` Du lait de vache frais
      `,
      image: `assets/image/lait1.svg`,
      categorie: `Produits laitiers et oeufs
      `,
      prix: 2000,
      description: `: Le lait frais de la Ferme Eden Vert est une source de nutrition pure et délicieuse, offrant une texture onctueuse et un goût riche en calcium.
     sdfsfsfsfsfsfsfsfsfs `,
      qte: 1,
    },
    {
      id: 31,
      nom: `oeufs de caille
      `,
      image: `assets/image/lait2.svg`,
      categorie: `Produits laitiers et oeufs
      `,
      prix: 2000,
      description: `Les œufs de caille de la Ferme Eden Vert sont de petits trésors de saveur et de nutrition. Leur taille compacte renferme une richesse de protéines,
      `,
      qte: 1,
    },
    {
      id: 32,
      nom: `Lait concentré sucré
      `,
      image: `assets/image/lait3.svg`,
      categorie: `Produits laitiers et oeufs
      `,
      prix: 2000,
      description: `Le lait concentré sucré de la Ferme Eden Vert est une gourmandise sucrée et crémeuse, parfaite pour ajouter de la richesse et de la douceur à vos desserts préférés.
      `,
      qte: 1,
    },
    {
      id: 33,
      nom: `Beurre crémeux
      `,
      image: `assets/image/lait4.svg`,
      categorie: `Produits laitiers et oeufs
      `,
      prix: 2000,
      description: `Le beurre artisanal de la Ferme Eden Vert est un trésor de saveur et de texture, offrant une richesse crémeuse et un arôme délicieusement beurré.
      `,
      qte: 1,
    },
    {
      id: 34,
      nom: ` Oeufs 
      `,
      image: `assets/image/lait5.svg`,
      categorie: `Produits laitiers et oeufs
      `,
      prix: 2000,
      description: `Les œufs de la Ferme Eden Vert sont des joyaux de fraîcheur et de qualité, offrant une source de protéines essentielles et de nutriments bénéfiques pour la santé
      `,
      qte: 1,
    },
    {
      id: 35,
      nom: `Fromage de vache affiné
      `,
      image: `assets/image/lait6.svg`,
      categorie: `Produits laitiers et oeufs
      `,
      prix: 2000,
      description: `Les fromages artisanaux de la Ferme Eden Vert sont une symphonie de saveurs et de textures, offrant une variété de choix allant du doux au corsé.
      `,
      qte: 1,
    },
  ];

  lait() {
    return this.laits;
  }

  incrementation(item: any) {
    if (item.qte != 10) {
      item.qte += 1;
    }
  }
  décrementation(item: any) {
    if (item.qte != 0) {
      item.qte -= 1;
    }
  }

  laitSubject = new Subject<any>();
}
