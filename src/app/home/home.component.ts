import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from '../auth/models';
import { AuthService } from '../auth/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Home';
  loading = false;
  currentUser: User;
  isAdmin = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService) {
    this.currentUser = this.authService.currentUserValue;
    this.isAdmin = this.authService.isAdmin;
  }

  ngOnInit() {
  }

}
