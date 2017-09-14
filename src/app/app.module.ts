import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthentication } from './providers/angular-fire-authentication.service';
import { AngularFireDatabase } from "angularfire2/database";
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { AddTaskComponent } from './add-task/add-task.component'

// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyAZ9SMHlHPSv2g-uOv-CuicRQspn3KtIvA',
  authDomain: 'fir-crud-91d56.firebaseapp.com',
  databaseURL: 'https://fir-crud-91d56.firebaseio.com',
  storageBucket: 'fir-crud-91d56.appspot.com',
  messagingSenderId: '169816448175'
};

@NgModule({
  declarations: [
    AppComponent,
    TasksListComponent,
    AddTaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [AngularFireAuthentication, AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
