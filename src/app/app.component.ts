import {Component} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {RouterModule, RouterLink} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, RouterModule, RouterLink],
  templateUrl:'app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
}
