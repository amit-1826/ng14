import { Component, OnInit } from '@angular/core';
import { ClickService } from '../click.service';
import { HighlightDirective } from '../highlight.directive';
import { ChildComponent } from './child/child.component';

@Component({
  standalone: true,
  imports: [HighlightDirective, ChildComponent],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter'];
  objectProperty = {
    name: 'Amit',
    age: 22
  }

  addPlanet() {
    this.planets.push('Jupiter');
  }

  changeObjectPropertyData() {
    this.objectProperty.name = 'Amit Dubey'
  }

  constructor(private clickService: ClickService) { }

  ngOnInit(): void {
    this.clickService.registerClick();
  }

}
