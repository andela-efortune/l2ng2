import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'layout-header',
  templateUrl: 'app/shared/layout/header-component.html',
  styleUrls: ['app/shared/layout/header-component.css']
})
export class HeaderComponent {
  constructor() {}

  // name: string = 'Angular2';
  @Input() name: string;
  @Output() onValueChange = new EventEmitter<string>();

  changeName(newName: string) {
    this.onValueChange.emit(newName);
  }
}
