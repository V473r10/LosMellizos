import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit {
  @ViewChild('input') input!:ElementRef<HTMLInputElement>

  ordenes: any[] = []

  constructor(
    // private ControlTiempos: ControlTiemposService
    ) { }

    ngOnInit(): void {
  }

  click() {
    console.log(this.input.nativeElement.value);
  }

}
