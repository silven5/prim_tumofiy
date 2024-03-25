import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CloudComponent } from './cloud/cloud.component';
import { ClassComponent } from './class/class.component';
import { ServiceComponent } from './service/service.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports:  [
    RouterOutlet,
    HeaderComponent,
    RouterLink,
    RouterLinkActive,
    CloudComponent,
    ClassComponent,
    ServiceComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lab4-app';
}
