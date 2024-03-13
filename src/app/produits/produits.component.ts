import { Component } from '@angular/core';
import { CharcuterieComponent } from '../charcuterie/charcuterie.component';
import { RouterModule } from '@angular/router';
import { CharcuterieService } from '../../Services/charcuterie.service';
;

@Component({
  selector: 'app-produits',
  standalone: true,
  imports: [CharcuterieComponent,RouterModule],
  templateUrl: './produits.component.html',
  styleUrl: './produits.component.css'
})
export class ProduitsComponent {
constructor(){

}
}
