import { Component, OnInit } from '@angular/core';
import { ClickService } from '../click.service';
import { HighlightDirective } from '../highlight.directive';

@Component({
  standalone: true,
  imports: [HighlightDirective],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private clickService: ClickService) { }

  ngOnInit(): void {
    this.clickService.registerClick();
  }

}
