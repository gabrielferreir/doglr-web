import {Component, Input, OnChanges, OnInit, ViewChild} from '@angular/core';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit {

  @Input('slide') slide;
  @Input('readyToGo') readyToGo;
  @ViewChild('images') images;
  pathImages: string;

  constructor() {
    this.slide = !this.slide ? null : this.slide;
    this.pathImages = `${environment.API}/images/photos_animals/`;
  }

  ngOnInit() {
  }

  nextImage() {
    const totalPages = this.images.element.nativeElement.querySelectorAll('.page').length;
    const nextPage = this.images.currentPage < totalPages ? this.images.currentPage + 1 : 1;
    this.images.pagesGoToPage(nextPage);
  }

}
