import {Component, Input, OnInit} from '@angular/core';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-card-animal',
  templateUrl: './card-animal.component.html',
  styleUrls: ['./card-animal.component.scss']
})
export class CardAnimalComponent implements OnInit {

  @Input('info') info: any;
  @Input('editing') editing: boolean;
  pathImage: string;

  constructor() {
  }

  ngOnInit() {
    this.pathImage = this.info.images && this.info.images[0] ? `${environment.API}/images/photos_animals/${this.info.images[0].path}` : null;
    console.log(this.pathImage);
  }

}
