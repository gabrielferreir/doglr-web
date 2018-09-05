import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {UiToolbarService} from 'ng-smn-ui';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, AfterViewInit, OnDestroy {

  info: any;

  constructor(private toolbarService: UiToolbarService) {
    this.info = {};
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

}
