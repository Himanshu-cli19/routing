import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ServiceComponent } from './service/service.component';
import { ErrorComponent } from './error/error.component';
import { MainComponent } from './main/main.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ServiceComponent,ErrorComponent,MainComponent,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'routing';
}
