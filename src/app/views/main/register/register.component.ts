import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {UiToolbarService, UiSnackbar, UiElement} from 'ng-smn-ui';
import {Location} from '@angular/common';
import {environment} from '../../../../environments/environment';
import {ApiService} from '../../../core/api/api.service';
import {UserService} from '../../../core/user/user.service';
import {ActivatedRoute, Router, RouterLinkActive} from '@angular/router';
import {isNumber} from 'util';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, AfterViewInit, OnDestroy {

  info: any;

  typeOptions: any;
  sexoOptions: any;
  porteOptions: any;
  breedOptions: any;
  temperamentOptions: any;

  saving: boolean;
  addingNew: boolean;

  PATH = environment.API + environment.PATH_ANIMAL_IMAGES;


  @ViewChild('inputNovaImagem') inputNovaImagem;

  constructor(private toolbarService: UiToolbarService,
              public _location: Location,
              private element: ElementRef,
              private _api: ApiService,
              private _user: UserService,
              private router: Router,
              private _route: ActivatedRoute) {
    this.info = {
      images: []
    };

    this.typeOptions = {
      registros: [
        {id: 'C', nome: 'Cachorro'},
        {id: 'G', nome: 'Gato'}
      ]
    };

    this.sexoOptions = {
      registros: [
        {id: true, nome: 'Macho'},
        {id: false, nome: 'Femea'}
      ]
    };

    this.porteOptions = {
      registros: [
        {id: 1, nome: 'Pequeno'},
        {id: 2, nome: 'Grande'}
      ]
    };

    this.breedOptions = {
      registros: [
        {id: 1, nome: 'Vira-lata'},
        {id: 2, nome: 'PitBull'}
      ]
    };

    this.temperamentOptions = {
      registros: [
        {id: 1, nome: 'Calmo'},
        {id: 2, nome: 'Agressivo'}
      ]
    };


  }

  ngOnInit() {

    if (this._route.snapshot.params['id']) {
      console.log('Editando');
      this.addingNew = false;
      this.getAnimal();
    } else {
      console.log('Adicionando');
      this.addingNew = true;
    }
  }

  ngAfterViewInit() {
    this.toolbarService.set('Cadastrar animal');
    this.toolbarService.activateExtendedToolbar(960);
  }

  ngOnDestroy() {
    this.toolbarService.deactivateExtendedToolbar();
  }

  openExplorer() {
    this.inputNovaImagem.nativeElement.click();
  }

  changeImagem(file, base64) {
    this.info.images.push({
      base64: base64,
      adding: true
    });
  }

  changeImagemError(file, customError) {
    if (customError.type) {
      UiSnackbar.show({
        text: 'Escolha um arquivo JPG, JPEG ou PNG',
        actionText: 'OK',
        action: close => close()
      });
    } else if (customError.maxFileSize) {
      UiSnackbar.show({
        text: 'Escolha um arquivo menor que 15MB',
        actionText: 'OK',
        action: close => close()
      });
    } else {
      UiSnackbar.show({
        text: 'Não foi possível trocar a imagem',
        actionText: 'OK',
        action: close => close(),
        duration: Infinity
      });
    }

  }

  removeImage(index) {
    if (this.info.images[index].path) {
      this.info.images[index].removed = true;
    } else {
      this.info.images.splice(index, 1);
    }
    console.log(this.info.images);
  }

  onSubmit(form) {
    if (!this.saving) {
      this.saving = true;

      for (const control in form.controls) {
        if (form.controls.hasOwnProperty(control)) {
          form.controls[control].markAsTouched();
          form.controls[control].markAsDirty();
        }
      }

      if (!form.valid) {
        UiElement.focus(this.element.nativeElement.querySelector('form .ng-invalid'));
        this.saving = false;
        return false;
      }

      this.correction();

      if(this.addingNew) {
        this.register();
      } else {
        this.update();
      }

    }
  }

  register() {
    this._api.request('POST', `${environment.API}/animals`, {
      body: this.info,
      headers: {
        authentication: this._user.getToken()
      }
    })
      .subscribe(res => {
        console.log(res);
        this.router.navigate(['/my-animals']);
      }, err => {
        console.log(err);
      }, () => {

      });
  }

  update() {
    this._api.request('PUT', `${environment.API}/animals/${this._route.snapshot.params['id']}`, {
      body: this.info,
      headers: {
        authentication: this._user.getToken()
      }
    })
      .subscribe(res => {
        console.log(res);
        this.router.navigate(['/my-animals']);
      }, err => {
        console.log(err);
      }, () => {

      });
  }
  correction() {
    console.log(this.info.cep);
    this.info.cep = isNumber(this.info.cep) ? this.info.cep : parseInt(this.info.cep.replace('-', ''), 10);
    this.info.age = parseInt(this.info.age, 10);
    this.info.numero = this.info.numero.toString();
  }

  getAnimal() {
    this._api.request('GET', `${environment.API}/animals/${this._route.snapshot.params.id}`, {})
      .subscribe(res => {
        console.log(res);
        this.info = res.content;
      }, err => {
        console.log(err);

      }, () => {
      });
  }

}
