import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

export const sessionGuard: CanActivateFn = (route, state) => {
  const cookieService = inject(CookieService);
  const router = inject(Router);

  // checkCookieSesion(): boolean {
  //   return true;
  // }

  try {
    const token = cookieService.check('token');
    console.log('respuesta de "token": ', token);
    if (token) {
      return true;
    } else {
      router.navigate(['/', 'auth']);
      return false;
    }
  } catch (error) {
    console.log('Ocurrió error en session guard.');
    return false;
  }
  // return cookieService; // true/false?
};
