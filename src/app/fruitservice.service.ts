import { Injectable } from '@angular/core';
import { Donnes } from './donnes';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FruitserviceService {
  constructor() {}

  fruits: Donnes[] = [
    {
      id: 10,
      nom: `Pommes rouge`,
      image: `assets/image/fruit1.svg`,
      categorie: `Fruits et legumes`,
      prix: 2000,
      description: ` 
 	
      Les pommes de la Ferme Eden Vert sont croquantes et sucrées, avec une chair ferme et juteuse. Disponibles dans une variété de saveurs et de couleurs, elles sont parfaites pour les tartes,`,
      qte: 1,
    },
    {
      id: 11,
      nom: `Pommes verte
      `,
      image: `assets/image/fruit2.svg`,
      categorie: `Fruits et legumes
      `,
      prix: 1500,
      description: `Les pommes de la Ferme Eden Vert sont croquantes et sucrées, avec une chair ferme et juteuse. Disponibles dans une variété de saveurs et de couleurs, elles sont parfaites pour les tartes,
      `,
      qte: 1,
    },
    {
      id: 12,
      nom: `Poires
      `,
      image: `assets/image/fruit3.svg`,
      categorie: `Fruits et legumes
      `,
      prix: 2500,
      description: `Les poires de la Ferme Eden Vert sont juteuses et parfumées, avec une chair douce et fondante. Récoltées à pleine maturité, elles offrent une saveur délicate et sucrée
      `,
      qte: 1,
    },

    {
      id: 13,
      nom: `Oranges
      `,
      image: `assets/image/fruit4.svg`,
      categorie: `Fruits et legumes
      `,
      prix: 700,
      description: `Nos oranges sont juteuses et pleines de saveur, avec une chair sucrée et acidulée. Riches en vitamine C et en antioxydants, elles sont parfaites pour les jus frais
      `,
      qte: 1,
    },
    {
      id: 14,
      nom: `Citrons
      `,
      image: `assets/image/fruit5.svg`,
      categorie: `Fruits et legumes
      `,
      prix: 1000,
      description: `: Nos citrons sont acidulés et rafraîchissants, avec un parfum vif et vibrant. Parfaits pour ajouter une touche de fraîcheur à vos plats,
      `,
      qte: 1,
    },
    {
      id: 15,
      nom: `Noix de coco
      `,
      image: `assets/image/fruit6.svg`,
      categorie: `Fruits et legumes
      `,
      prix: 500,
      description: `Les noix de coco de la Ferme Eden Vert sont fraîches et délicieusement parfumées, offrant une chair tendre et juteuse ainsi qu'un lait rafraîchissant et crémeux.
      `,
      qte: 1,
    },
    {
      id: 16,
      nom: `Papayes
      `,
      image: `assets/image/fruit7.svg`,
      categorie: `Fruits et legumes
      `,
      prix: 1000,
      description: `Nos papayes sont douces et parfumées, avec une texture délicate et fondante. Leur chair orange vif est riche en saveur et en nutriments,
      `,
      qte: 1,
    },
    {
      id: 17,
      nom: `Mangues
      `,
      image: `assets/image/fruit8.svg`,
      categorie: `Fruits et legumes
      `,
      prix: 1200,
      description: `Nos mangues sont cueillies à pleine maturité, garantissant une explosion de saveurs tropicales dans chaque bouchée.un fruit estival incontournable, parfait pour les desserts 
      `,
      qte: 1,
    },
    {
      id: 18,
      nom: `Bananes
      `,
      image: `assets/image/fruit9.svg`,
      categorie: `Fruits et legumes
      `,
      prix: 800,
      description: `Les bananes de la Ferme Eden Vert sont mûries au soleil tropical, offrant une chair douce et crémeuse.Leur saveur sucrée et leur texture veloutée en font une collation saine et délicieuse
      `,
      qte: 1,
    },
    {
      id: 19,
      nom: `Avocats
      `,
      image: `assets/image/fruit10.svg`,
      categorie: `Fruits et legumes
      `,
      prix: 700,
      description: `Les avocats de la Ferme Eden Vert sont riches et crémeux, parfaits pour les guacamoles, les salades ou les tartines Leur texture lisse et leur saveur délicate en font un ingrédient polyvalent et nourrissant
      `,
      qte: 1,
    },
    {
      id: 20,
      nom: `Oignons
      `,
      image: `assets/image/fruit11.svg`,
      categorie: `Fruits et legumes
      `,
      prix: 500,
      description: `Les oignons de la Ferme Eden Vert sont doux et parfumés, parfaits pour les sautés, les sauces ou les soupes. Leur saveur délicate et leur texture tendre en font un ingrédient polyvalent pour de nombreuses recettes.
      `,
      qte: 1,
    },
    {
      id: 21,
      nom: `Tomates
      `,
      image: `assets/image/fruit12.svg`,
      categorie: `Fruits et legumes
      `,
      prix: 600,
      description: `Nos tomates sont juteuses et savoureuses, avec une chair rouge éclatante et une acidité équilibrée. Idéales pour les salades, les sauces ou les sandwichs
      `,
      qte: 1,
    },
    {
      id: 22,
      nom: `Poivrons
      `,
      image: `assets/image/fruit13.svg`,
      categorie: `Fruits et legumes
      `,
      prix: 1000,
      description: `Nos poivrons sont colorés et croquants, avec une saveur douce et légèrement sucrée. Parfaits pour les poêlées, les grillades ou les salades, ils ajoutent une touche de fraîcheur et de couleur à tous vos plats
      `,
      qte: 1,
    },
    {
      id: 23,
      nom: `Carottes`,
      image: `assets/image/fruit14.svg`,
      categorie: `Fruits et legumes
      `,
      prix: 700,
      description: `Nos carottes sont croquantes et sucrées, avec une couleur vibrante et une texture ferme. Riches en vitamines et en antioxydants, elles sont idéales pour les salades
      `,
      qte: 1,
    },
    {
      id: 24,
      nom: `Pommes de terre`,
      image: `assets/image/fruit15.svg`,
      categorie: `Fruits et legumes
      `,
      prix: 600,
      description: `Les pommes de terre de la Ferme Eden Vert sont fermes et polyvalentes, parfaites pour les purées, les rôtis ou les gratins.Leur chair tendre et leur saveur douce en font un accompagnement réconfortant pour tous vos repas.
      `,
      qte: 1,
    },
    {
      id: 25,
      nom: `Courgettes
      `,
      image: `assets/image/fruit16.svg`,
      categorie: `Fruits et legumes
      `,
      prix: 900,
      description: `Les courgettes de la Ferme Eden Vert sont croquantes et polyvalentes, avec une saveur douce et délicate. Parfaites pour les sautés, les soupes ou les plats de pâtes,
      `,
      qte: 1,
    },
    {
      id: 26,
      nom: `Concombres
      `,
      image: `assets/image/fruit17.svg`,
      categorie: `Fruits et legumes
      `,
      prix: 500,
      description: `Nos concombres sont croquants et rafraîchissants, avec une texture tendre et une saveur légèrement sucrée. Parfaits pour les salades, les sandwichs ou simplement à croquer en collation,
      `,
      qte: 1,
    },
    {
      id: 27,
      nom: `Aubergines
      `,
      image: `assets/image/fruit18.svg`,
      categorie: `Fruits et legumes
      `,
      prix: 900,
      description: `Nos aubergines sont riches et veloutées, avec une texture douce et délicatement parfumée. Parfaites pour les plats mijotés, les gratins ou les curry,
      `,
      qte: 1,
    },
    {
      id: 28,
      nom: `Feuilles de laitue
      `,
      image: `assets/image/fruit19.svg`,
      categorie: `Fruits et legumes
      `,
      prix: 300,
      description: `Nos salades fraîches sont croquantes et rafraîchissantes, avec une saveur délicate et un bouquet de nutriments essentiels. Idéales pour les salades composées
      `,
      qte: 1,
    },
    {
      id: 29,
      nom: `Épinards 
      `,
      image: `assets/image/fruit20.svg`,
      categorie: `Fruits et legumes
      `,
      prix: 400,
      description: `Les épinards de la Ferme Eden Vert sont riches en fer et en vitamines, avec une saveur douce et terreuse. Parfaits pour les salades, les sautés ou les quiches
      `,
      qte: 1,
    },
  ];

  fruit() {
    return this.fruits;
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

  // cardSubject
  cardSubject = new Subject<any>();
}
