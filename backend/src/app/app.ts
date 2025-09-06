import { Component, signal } from '@angular/core';
import { Home } from "./home/home";

@Component({
  selector: 'app-root',
  imports: [Home],
  template: `
    <app-home />

  `,
  styles: [],
})
export class App {
  protected readonly title = signal('backend');
}
