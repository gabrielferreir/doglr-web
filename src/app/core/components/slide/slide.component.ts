import {Component, Input, OnInit} from '@angular/core';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit {

  @Input('slide') slide;
  pathImages: string;

  constructor() {
    this.slide = !this.slide ? null : this.slide;
    this.pathImages = `${environment.API}/animals/`;
  }

  ngOnInit() {
  }

}
