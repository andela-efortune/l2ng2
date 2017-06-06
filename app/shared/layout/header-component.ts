import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'layout-header',
  templateUrl: 'app/shared/layout/header-component.html'
})
export class HeaderComponent {
  constructor() {}

  // name = 'Anglar 2'
  @Input() name: string;
  @Output() onNameChanged = new EventEmitter<string>();

  changeName(newName: string) {
    this.onNameChanged.emit(newName);
  }
}
