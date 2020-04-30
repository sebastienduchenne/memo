import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // selector = l'endroit où inclure le composant dans src/index.html
  templateUrl: './app.component.html', // fichier html
  styleUrls: ['./app.component.css'] // fichier CSS
})
export class AppComponent {
  title = 'sandbox';
  constructor() { }
}
