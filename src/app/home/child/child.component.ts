import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() planets!: string[]; 
  @Input() objectProperty!: {name: string, age: number};

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('On changes called', this.objectProperty);
  }
  ngDoCheck(): void {
    console.log('On do check called', this.objectProperty);
  }
  ngAfterContentInit(): void {
    console.log('On after content init called', this.objectProperty);
  }
  ngAfterContentChecked(): void {
    console.log('On  after content checked called', this.objectProperty);
  }
  ngAfterViewInit(): void {
    console.log('On after view init called', this.objectProperty);
  }
  ngAfterViewChecked(): void {
    console.log('On after view checked called', this.objectProperty);
  }
  ngOnDestroy(): void {
    console.log('On on destroy called', this.objectProperty);
  }
  ngOnInit(): void {
    console.log('On init called', this.objectProperty);
    
  }

}
