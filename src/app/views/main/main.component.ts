import {AfterViewInit, Component, OnInit} from '@angular/core';
import {UserService} from '../../core/user/user.service';
import {Router} from '@angular/router';
import {UiToolbarService} from 'ng-smn-ui';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, AfterViewInit {
  title: string;
  menuOpen: boolean;
  user: any;

  constructor(private _user: UserService,
              private _router: Router,
              private toolbarService: UiToolbarService) {
    this.title = 'Home';

    this.user = this._user.getUser();
  }

  ngOnInit() {
    this.toolbarService.registerMainToolbar(document.getElementById('app-header'));

    this.toolbarService.change.subscribe(title => {
      this.title = title;
    });

  }

  logoff() {
    this._router.navigate(['/login']);
    this._user.remove();
  }

  ngAfterViewInit() {

  }


}
