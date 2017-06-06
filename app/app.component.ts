import { Component } from '@angular/core';

@Component({
  selector: 'pm-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent {
  constructor() {}

  name: string = `Angular2`;
  setName(newName: string) {
    this.name = newName;
  }
}
