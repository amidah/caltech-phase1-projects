import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input()
  childData = ''
  @Output()
  customEvent = new EventEmitter()
  onClickHandler(){
  this.customEvent.emit('Hi from Child')
  }


}
