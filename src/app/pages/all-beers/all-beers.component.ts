import { Router } from '@angular/router';
import { HttpService } from './../../services/http.service';
import { Component, OnInit } from '@angular/core';
import { Beer } from 'src/app/models/beer-model';
import { BeerService } from 'src/app/services/beer.service';

@Component({
  selector: 'app-all-beers',
  templateUrl: './all-beers.component.html',
  styleUrls: ['./all-beers.component.scss']
})
export class AllBeersComponent implements OnInit {

  // slider: string = "Home > All Beers"
  // whichElementSelected: boolean = false;

  constructor(private httpService: HttpService, public beerService: BeerService, private router: Router) {
    this.httpService.getAllBeers().subscribe((beerData)=> {
      this.beerService.Beers = beerData as Beer[];
    })
   }

   ngOnInit(): void {
  }
  
  
}
