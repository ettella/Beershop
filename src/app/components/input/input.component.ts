import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  
  @Input() type: string = 'text';
  @Input() name?: string = 'search';
  @Input() placeholder: string = 'Search for a beer...';

  constructor() { }

  ngOnInit(): void {
  }

}
