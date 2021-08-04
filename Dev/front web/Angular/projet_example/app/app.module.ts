import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [// composants du module
    AppComponent,
    //component
    //directive
    //pipe
    //component de routes
  ],
  imports: [// modules requis
    BrowserModule,
    AppRoutingModule
  ],
  providers: [], // services créés
  bootstrap: [AppComponent] // point d'entrée
})
export class AppModule { }
