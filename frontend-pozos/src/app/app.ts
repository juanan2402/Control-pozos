import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Principal } from './components/principal/principal';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Principal],
  template: `
    <app-principal />
  `,
  styles: [],
})
export class App {
  protected readonly title = signal('frontend-pozos');
}
