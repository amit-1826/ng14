import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RoutingRoutingModule } from './routing-routing.module';

const routes: Routes = []

@Component({
  standalone: true,
  imports: [HomeComponent, RoutingRoutingModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng14';
}
