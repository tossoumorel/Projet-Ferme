import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
  inject,
  viewChild,
} from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import {
  MatSidenav,
  MatSidenavContainer,
  MatSidenavModule,
} from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ProduitsComponent } from './produits/produits.component';
import { AproposComponent } from './apropos/apropos.component';
import { ContactComponent } from './contact/contact.component';
import { BreakpointObserver, LayoutModule } from '@angular/cdk/layout';
import { CartComponent } from './cart/cart.component';
import { CharcuterieService } from '../Services/charcuterie.service';
import { MatListModule } from '@angular/material/list';
import { NavLink } from './nav-link';
import { FruitserviceService } from './fruitservice.service';
import { LaitservicesService } from './laitservices.service';
import {CdkAccordionModule} from '@angular/cdk/accordion';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    RouterModule,
    MatIconModule,
    MatMenuModule,
    AcceuilComponent,
    ProduitsComponent,
    AproposComponent,
    ContactComponent,
    RouterModule,
    LayoutModule,
    CartComponent,
    MatListModule,
    CdkAccordionModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements AfterViewInit, OnInit {
  title = 'Ferme';
  menuOuvert: boolean = false;
  @ViewChild('sidenav') sidenav!: MatSidenav;

  constructor(
    private responsive: BreakpointObserver,
    private carsubject: CharcuterieService,
    private fruitsubject : FruitserviceService,
    private router: Router,
    private lait : LaitservicesService,
  ) {
    this.carsubject.cardSubject.subscribe((data) => {
      this.cardItemNUm = data;
    });
    this.fruitsubject.cardSubject.subscribe((data) => {
      this.cardItemNUm = data;
    });
    this.lait.laitSubject.subscribe((data) => {
      this.cardItemNUm = data;
    });
  }

  ngAfterViewInit(): void {
    this.responsive.observe(['(min-width : 760px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.close();
      } else {
        this.sidenav.close();
      }
    });
  }

  ngOnInit(): void {
    this.ItemcarShop();
  }
  cardItemNUm: number = 0;
  ItemcarShop() {
    // if (localStorage.getItem('localcard') ==null)
    if (typeof localStorage !== 'undefined' && localStorage !== null) {
      var cardcount = JSON.parse(localStorage.getItem('localcard')!);
      this.cardItemNUm = cardcount.length;
    }
  }

  closeSidenav(): void {
    // Ferme automatiquement la barre de navigation lorsqu'un élément est sélectionné
    // Vous pouvez également utiliser cette méthode pour effectuer d'autres actions si nécessaire
    this.sidenav.toggle();
  }

  // navItem
  navItem: NavLink[] = [
    {
      link: '/Acceuil',
      linkMenu: 'Acceuil',
    },
    {
      link: '/Produit',
      linkMenu: 'Nos Produits',
    },
    {
      link: '/Apropos',
      linkMenu: 'A propos',
    },
    {
      link: '/contact',
      linkMenu: 'Contact',
    },
  ];

  ouvrirMenu() {
    this.menuOuvert = true;
  }

  fermerMenu() {
    this.menuOuvert = false;
  }

  naviguerVersPage(url: string) {
    this.router.navigate([url]);
    this.fermerMenu(); // Ferme le menu après la navigation
  }
}
