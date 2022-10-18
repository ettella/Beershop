import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-beer-item',
  templateUrl: './beer-item.component.html',
  styleUrls: ['./beer-item.component.scss']
})
export class BeerItemComponent implements OnInit {


  @Input() name!: string;
  @Input() image_url!: string;
  @Input() tagline!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
