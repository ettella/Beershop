import { Injectable } from '@angular/core';
import { Beer } from '../models/beer-model';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  Beers: Beer[] = [];
  shoppingCart: Beer[] = [];
  wishlist: Beer[] = [];

  // only one beer:

  selectedBeer?: Beer;

  constructor() { }

}
