import { Injectable } from '@angular/core';
import { Donnes } from '../app/donnes';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CharcuterieService {
  button = true;
  constructor() {}

  charcuteries: Donnes[] = [
    {
      id: 1,
      nom: 'Jambon fumé local',
      image: 'assets/image/char1.svg',
      categorie: 'Chacuterie',
      prix: 5000,
      description: `Tranché finement, notre jambon fumé artisanal offre une saveur délicate et un arôme subtil, parfait pour les sandwichs, les salades et les plateaux de charcuterie
        `,

      qte: 1,
    },
    {
      id: 2,
      nom: 'Saucisson sec traditionnel',
      image: 'assets/image/char2.svg',
      categorie: 'Chacuterie',
      prix: 4500,
      description: `Séché lentement,notre saucisson sec traditionnel est riche en saveur, avec une texture ferme et une légère note d'ail, idéal pour l'apéritif ou les collations rapides
      `,
      qte: 1,
    },
    {
      id: 3,
      nom: `Pâté de foie de volaille maison`,
      image: 'assets/image/char3.svg',
      categorie: 'Chacuterie',
      prix: 3700,
      description: `Préparé avec soin selon une recette traditionnelle, notre pâté de foie de volaille est crémeux et délicatement assaisonné, parfait pour  les entrées élégantes.
      `,
      qte: 1,
    },
    {
      id: 4,
      nom: `Lardons fumés maison`,
      image: 'assets/image/char4.svg',
      categorie: 'Chacuterie',
      prix: 3600,
      description: `Nos lardons fumés ajoutent une touche de saveur fumée à vos plats préférés, qu'ils soient utilisés dans les omelettes, les quiches ou les salades.
        `,
      qte: 1,
    },
    {
      id: 5,
      nom: `Mortadelle à l'ail et aux olives`,
      image: 'assets/image/char5.svg',
      categorie: 'Chacuterie',
      prix: 4700,
      description: `Notre mortadelle est préparée avec de l'ail frais et des olives juteuses, offrant une saveur méditerranéenne et une texture tendre, parfaite pour les sandwiches`,

      qte: 1,
    },
    {
      id: 6,
      nom: `Saucisson à l'ail`,
      image: 'assets/image/char6.svg',
      categorie: 'Chacuterie',
      prix: 600,
      description: `Fabriqué avec de l'ail frais et des épices traditionnelles, notre saucisson à l'ail est un incontournable des apéritifs, offrant une saveur intense et un arôme délicieux.`,

      qte: 1,
    },
    {
      id: 7,
      nom: `Filet mignon séché`,
      image: 'assets/image/char7.svg',
      categorie: 'Chacuterie',
      prix: 5800,
      description:
        'Préparé avec soin et séché lentement, notre filet mignon séché offre une texture tendre et une saveur délicate, parfaite pour les plateaux de charcuterie ou les antipasti.',

      qte: 1,
    },
    {
      id: 8,
      nom: `Jambon blanc artisanal tranché`,
      image: 'assets/image/char8.svg',
      categorie: 'Chacuterie',
      prix: 4000,
      description:
      'Fabriqué avec des morceaux sélectionnés de viande de porc, notre jambon blanc artisanal est tendre et juteux, avec une saveur douce et délicieuse.',

      qte: 1,
    },
    {
      id: 9,
      nom: `Saucisson sec aux noix de cajou`,
      image: 'assets/image/char9.svg',
      categorie: 'Chacuterie',
      prix: 4000,
      description:
        'Fabriquée à partir de viandes sélectionnées et de noix croquantes, notre saucisse sèche offre une combinaison unique de saveurs salées et sucrées, parfaite pour les apéritifs ou les collations rapides.',
      qte: 1,
    },
  ];
  charcuterieItems() {
    return this.charcuteries;
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
