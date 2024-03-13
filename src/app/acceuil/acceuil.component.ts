import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Categories } from '../categories';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-acceuil',
  standalone: true,
  imports: [CarouselModule, RouterModule, NgFor],
  templateUrl: './acceuil.component.html',
  styleUrl: './acceuil.component.css',
})
export class AcceuilComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    autoplay: true,
    autoplayTimeout: 3000,
    dots: false,
    navSpeed: 100,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 1,
      },
      940: {
        items: 1,
      },
    },
  };

  // 2ème bannière
  customOptions1: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 600,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 3,
      },
    },
  };


  // catégorie de produits
  CategorieProducts: Categories[] = [
    {
      id : '1',
      image: 'assets/image/1.png',
      nom: 'Pommes Succulentes',
      description:'Des pommes juteuses cultivées avec amour.',
    },
    {
      id : '1',
      image: 'assets/image/2.png',
      nom: 'Pommes Succulentes',
      description:'Des pommes juteuses cultivées avec amour.',
    },
  ];
}
