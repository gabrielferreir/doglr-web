import {Component, Input, OnInit} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {Router} from '@angular/router';

@Component({
  selector: 'app-card-animal',
  templateUrl: './card-animal.component.html',
  styleUrls: ['./card-animal.component.scss']
})
export class CardAnimalComponent implements OnInit {

  @Input('info') info: any;
  @Input('editing') editing: boolean;
  pathImage: string;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.pathImage = this.info.images && this.info.images[0] ? `${environment.API}${environment.PATH_ANIMAL_IMAGES}${this.info.images[0].path}` : null;
  }

  share(event, title, description, id) {
    event.cancelBubble = true;
    const nav = <any>navigator;
    if (nav.share) {
      nav.share({
        title: title,
        text: description,
        url: environment.URL + '/animal/' + id
      })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing', error));
    } else {
      alert('Navegador não tem suporte');
    }
  }

  open() {
    this.editing ?
      this.router.navigate(['/update-animal/', this.info.id]) :
      this.router.navigate(['/animal/', this.info.id]);
  }

  format(meses) {
    const a = Math.floor(meses / 12);
    const m = meses - (a * 12);
    return a && m ?  `${a > 1 ? `${a} anos` : `${a} ano`}  e ${m > 1 ? `${m} meses` : `${m} mes`} ` :
      a && !m ? `${a > 1 ? `${a} anos` : `${a} ano`}` :
      `${m > 1 ? `${m} meses` : `${m} mes`}`;
  }

}
