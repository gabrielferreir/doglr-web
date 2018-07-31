import {Component, ElementRef, OnInit} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {ApiService} from '../../../core/api/api.service';
import {Router} from '@angular/router';
import {UiSnackbar} from 'ng-smn-ui';
import {UiElement} from 'ng-smn-ui';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  info: any;
  saving: boolean;

  constructor(private _api: ApiService,
              private _router: Router,
              private _element: ElementRef) {
    this.info = {};
  }

  ngOnInit() {
  }

  onSubmit(form) {
    for (const control in form.controls) {
      if (form.controls.hasOwnProperty(control)) {
        form.controls[control].markAsTouched();
        form.controls[control].markAsDirty();
      }
    }
    if (!form.valid) {
      UiElement.focus(this._element.nativeElement.querySelector('form .ng-invalid'));
      return false;
    }

    this._api.request('POST', `${environment.API}/user`, {
      body: this.info
    }).subscribe(response => {
      console.log(response);
      // const content = response.content;

      this._router.navigate(['/login']);
      UiSnackbar.show({
        text: 'Usuario cadastrado com sucesso'
      });

    }, err => {
      console.log(err);
      if (err.status === 409) {
        if (err.error.executionCode === 1) {
          form.controls.email.setErrors({usedEmail: true});
        }

        if (err.error.executionCode === 2) {
          form.controls.phone.setErrors({usedPhone: true});
        }

      }

    }, () => {
      // this.loading = false;
    });
  }

}
