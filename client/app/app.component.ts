import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styles: [require('../sass/main.scss')],
  template: '<h1>Hello World!</h1>'
})
export class AppComponent {}
