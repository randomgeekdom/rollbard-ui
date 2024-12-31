import { Component } from '@angular/core';
import { Route, Router, RouterModule, RouterOutlet, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import {AuthButtonComponent} from "./components/auth-button/auth-button.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, MatListModule, RouterModule, CommonModule, AuthButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'rollbard';
  routes: Routes;

  constructor(private router: Router){
    let routes = this.router.config.filter((route: Route) => route.data && route.data['show']);
    this.routes = routes.sort((a: Route, b: Route) => a.data!['title'].localeCompare(b.data!['title']));
  }
}
