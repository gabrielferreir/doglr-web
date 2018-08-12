import {Component, OnInit, ViewChild} from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.scss']
})
export class AnimalComponent implements OnInit {
  loading: boolean;

  @ViewChild('images') images;

  constructor(public _location: Location) {
  }

  ngOnInit() {
  }

  nextImage() {
    const totalPages = this.images.element.nativeElement.querySelectorAll('.page').length;
    const nextPage = this.images.currentPage < totalPages ? this.images.currentPage + 1 : 1;
    this.images.pagesGoToPage(nextPage);
  }

}
