import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

export const sessionGuard: CanActivateFn = (route, state) => {
  const cookieService = inject(CookieService);
  const router = inject(Router);

  try {
    const token = cookieService.check('token');
    // console.log('respuesta de "token": ', token);

    if (!token) {
      router.navigate(['/', 'auth']);
    }
    return token;
  } catch (error) {
    console.log('Ocurrió error en session guard.');
    return false;
  }
};
