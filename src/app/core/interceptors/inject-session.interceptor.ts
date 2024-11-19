import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

export const injectSessionInterceptor: HttpInterceptorFn = (req, next) => {
  // console.log('Holaaaaaa, desde req: ', req);
  const cookieservice = inject(CookieService); // Inyeccion de servicio

  try {
    const token = cookieservice.get('token');
    // console.log('que fue token??? ', token);

    let newRequest = req;

    newRequest = req.clone({
      setHeaders: {
        authorization: `Bearer ${token}`, //setear header de Autk token
        //CUSTOM_HEADER: "Holap"
      },
    });

    return next(newRequest); // retornamos esta nueva req, con nuestro token
  } catch (error) {
    console.log('Ocurrió error', error);
    return next(req);
  }
};
