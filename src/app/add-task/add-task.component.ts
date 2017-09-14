import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { Todo, DEFAULT_TODO } from "./../models/todo"

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  private todo: Todo = DEFAULT_TODO;
  constructor(private angularFireDatabase: AngularFireDatabase) { }

  ngOnInit() {
  }

  saveTodo(): void {
    this.todo.date = new Date().toString();
    this.angularFireDatabase.list("/todo-list").push(this.todo);
    this.todo.date = "";
    this.todo.title = "";
    this.todo.description = "";
  }
}
