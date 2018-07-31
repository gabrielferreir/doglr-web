import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-animal',
  templateUrl: './card-animal.component.html',
  styleUrls: ['./card-animal.component.scss']
})
export class CardAnimalComponent implements OnInit {

  @Input('info') info: any;

  constructor() { }

  ngOnInit() {
  }

}
