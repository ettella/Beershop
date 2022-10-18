import { HttpService } from './../../services/http.service';
import { Component, OnInit } from '@angular/core';
import { Beer } from 'src/app/models/beer-model';

@Component({
  selector: 'app-all-beers',
  templateUrl: './all-beers.component.html',
  styleUrls: ['./all-beers.component.scss']
})
export class AllBeersComponent implements OnInit {

  beers: Beer[] = [];

  constructor(private httpService: HttpService) {
    this.httpService.getAllBeers().subscribe((beerData)=> {
      this.beers = beerData as Beer[];
    })
   }

  ngOnInit(): void {
  }

}
