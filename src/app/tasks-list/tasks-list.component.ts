import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { Todo } from "./../models/todo";

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {
  private todoList: any[] = [];
  constructor(private angularFireDatabase:AngularFireDatabase) { }

  ngOnInit() {
    this.getTodoList();
  }

  getTodoList(): void {
    this.angularFireDatabase.list("/todo-list").subscribe(
      (res: any[]) => {
        this.todoList = res;
      }
    );
  }
  removeTodo(key: any): void {
    console.log(key);
    this.angularFireDatabase.object("/todo-list/"+key).remove();
  }
}
