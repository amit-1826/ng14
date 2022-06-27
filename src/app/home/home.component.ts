import { Component, OnInit } from '@angular/core';
import { HighlightDirective } from '../highlight.directive';

@Component({
  standalone: true,
  imports: [HighlightDirective],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
