import { Beer } from 'src/app/models/beer-model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BeerService } from 'src/app/services/beer.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  wishlistCounter: number = 0;
  // cartCounter = this.beerService.shoppingCart.length - it wasn't dynamic..

  deselectedBeer = undefined;


  constructor(public beerService: BeerService, private router: Router, private httpService: HttpService) {
   
   }

   ngOnInit(): void {
  }
  
  backToPage(){
    this.router.navigate(['']);
    this.beerService.selectedBeer = this.deselectedBeer;

  }


}
