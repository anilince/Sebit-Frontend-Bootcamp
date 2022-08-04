import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Output() personalEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  addPersonel(name:string):void {
    this.personalEvent.emit(name);
  }

}
