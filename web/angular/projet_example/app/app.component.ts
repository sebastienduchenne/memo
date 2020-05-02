import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // selector = l'endroit où inclure le composant dans src/index.html
  templateUrl: './app.component.html', // fichier html
  // on peut juste mettre le html dans un string : `<h3>{{title}}<h3>`
  styleUrls: ['./app.component.css'] // fichier CSS
})
export class AppComponent {
  title = 'sandbox';
  
  constructor() { }
}
