import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth/services';
import { User } from '../../auth/models';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  currentUser: User;
  status: boolean;
  subscription: Subscription;

  constructor(private authService: AuthService) {
    this.authService.currentUser.subscribe(x => this.currentUser = x);
  }

  get isAdmin() {
    return this.currentUser && this.currentUser.roles && this.currentUser.roles.indexOf('admin') >= 0;
  }

  logout() {
    this.authService.logout();
  }

  ngOnInit() {
    // this.subscription = this.authenticationService.authNavStatus$.subscribe(status => this.status = status);
  }

  ngOnDestroy() {
    // prevent memory leak when component is destroyed
    this.subscription.unsubscribe();
  }

}
