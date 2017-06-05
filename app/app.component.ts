import { Component } from '@angular/core';

@Component({
  selector: 'pm-app',
  template: `
  <div>
    <h2>Hello {{ name }} </h2>
  </div>
  `
})
export class AppComponent {
  constructor() {}
  
  name: string = `Angular 2`;
}
