import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy{
  @Input('srvElement') element: { type: string, name: string, content: string };
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;

  constructor() {
    console.log('Constructor Called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ng OnChanges Called');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngInit Called');
    console.log('textContent' + this.header.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log('ngDoCheck Called');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit Called');
    console.log('textContent' + this.header.nativeElement.textContent);
  }

  ngAfterContentChecked() {
    console.log('AfterContentChecked Called');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked Called');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit Called');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy Called');
  }
}
