import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  joaquina = {
    id: 'dnhsjdba',
    name: 'Joaquina',
    age: '3 anos',
    breed: 'Vira-lata',
    image: 'joaquina.png',
    visualizacoes: 26
  };

  constructor() {
  }

  ngOnInit() {
  }

}
