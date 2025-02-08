import {Component, Inject} from '@angular/core';
import {AuthService} from '@auth0/auth0-angular';
import {AsyncPipe, CommonModule, DOCUMENT} from '@angular/common';
import {MatIcon} from "@angular/material/icon";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-auth-button',
  standalone: true,
  imports: [
    AsyncPipe,
    CommonModule,
    MatIcon,
    MatButton
  ],
  templateUrl: './auth-button.component.html',
  styleUrl: './auth-button.component.scss'
})
export class AuthButtonComponent {
  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService) {
  }

}
