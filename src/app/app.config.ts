import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {provideAuth0} from "@auth0/auth0-angular";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideAnimationsAsync(),
    provideAuth0({
      domain: 'rollbard-auth.us.auth0.com',
      clientId: 'X5dwusfjWbm69V6W3LGaP92zKXMps1em',
      authorizationParams: {
        redirect_uri: window.location.origin,
      }
    })
  ]
};
