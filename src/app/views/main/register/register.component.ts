import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {UiToolbarService, UiSnackbar, UiElement} from 'ng-smn-ui';
import {Location} from '@angular/common';
import {environment} from '../../../../environments/environment';
import {ApiService} from '../../../core/api/api.service';
import {UserService} from '../../../core/user/user.service';
import {Router} from '@angular/router';

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

  @ViewChild('inputNovaImagem') inputNovaImagem;

  constructor(private toolbarService: UiToolbarService,
              public _location: Location,
              private element: ElementRef,
              private _api: ApiService,
              private _user: UserService,
              private router: Router) {
    this.info = {
      imagem: []
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
  }

  ngAfterViewInit() {
    this.toolbarService.set('Cadastrar animal');
    this.toolbarService.activateExtendedToolbar(960);
  }

  ngOnDestroy() {
    this.toolbarService.deactivateExtendedToolbar();
  }

  openExplorer() {
    // const button = <any>document.querySelector('#file');
    this.inputNovaImagem.nativeElement.click();
    // button.click();
  }

  changeImagem(file, base64) {
    this.info.imagem.push({
      base64: base64
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
    if (this.info.imagem[index].src) {
      this.info.imagem[index].removed = true;
    } else {
      this.info.imagem.splice(index, 1);
    }
    console.log(this.info.imagem);
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

      this._api.request('POST', `${environment.API}/animals`, {
        body: this.info,
        headers: {
          authentication: this._user.getToken()
        }
      })
        .subscribe(res => {
          console.log(res);
          this.router.navigate(['/']);
        }, err => {
          console.log(err);
        }, () => {

        });

    }
  }

  correction() {
    this.info.cep = parseInt(this.info.cep.replace('-', ''), 10);
    this.info.age = parseInt(this.info.age, 10);
  }

}
