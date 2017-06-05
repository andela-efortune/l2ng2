import { Component } from '@angular/core';

@Component({
  selector: 'pm-app',
  template: '<layout-header></layout-header>'
})
export class AppComponent {
  constructor() {}

  name: string = `This property can only be accessed by this component template`;
}
