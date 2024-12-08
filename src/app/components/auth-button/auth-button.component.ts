import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import {AsyncPipe, CommonModule, DOCUMENT} from '@angular/common';
import {MatListItem} from "@angular/material/list";

@Component({
  selector: 'app-auth-button',
  standalone: true,
    imports: [
        AsyncPipe,
        CommonModule,
        MatListItem
    ],
  templateUrl: './auth-button.component.html',
  styleUrl: './auth-button.component.scss'
})
export class AuthButtonComponent {
  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService) {}

}
