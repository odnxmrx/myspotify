import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { injectSessionInterceptor } from '@core/interceptors/inject-session.interceptor';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  providers: [
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: injectSessionInterceptor,
    //   multi: true,
    // },
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'myspotify';
}
