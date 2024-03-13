import { Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AproposComponent } from './apropos/apropos.component';
import { ProduitsComponent } from './produits/produits.component';
import { ContactComponent } from './contact/contact.component';
import { CharcuterieComponent } from './charcuterie/charcuterie.component';
import { CartComponent } from './cart/cart.component';
import { FruitComponent } from './fruit/fruit.component';
import { LaitComponent } from './lait/lait.component';

export const routes: Routes = [
  { path: 'Acceuil', component: AcceuilComponent },
  { path: 'Apropos', component: AproposComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'cart', component: CartComponent },
  { path: 'Produit', component: ProduitsComponent },
  { path: 'charcuterie', component: CharcuterieComponent },
  { path: 'fruit', component: FruitComponent },
  {path : 'lait', component : LaitComponent},
  {path : '' , redirectTo : 'Acceuil' , pathMatch: 'full'},
];
