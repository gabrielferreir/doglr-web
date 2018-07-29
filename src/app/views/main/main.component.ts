import {Component, OnInit} from '@angular/core';
import {UserService} from '../../core/user/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  title: string;
  menuOpen: boolean;
  user: any;

  constructor(private _user: UserService,
              private _router: Router) {
    this.title = 'Home';

    this.user = this._user.getUser();
  }

  ngOnInit() {
  }

  logoff() {
    this._router.navigate(['/login']);
  }

}
