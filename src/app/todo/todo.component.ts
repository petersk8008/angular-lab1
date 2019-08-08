import { Component, OnInit } from '@angular/core';
import { Todo } from '../interfaces/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  laundry: Todo = {
    task: 'Do laundry',
    complete: true,
  };
  cleanBedroom: Todo = {
    task: 'Clean Bedroom',
    complete: false,
  };
  feedDog: Todo = {
    task: 'Feed and water Ralph',
    complete: true,
  };
  petDog: Todo = {
    task: 'Show Ralph-ie Boy some good ol pets',
    complete: true,
  };
  callSmother: Todo = {
    task: 'Give a call to mom',
    complete: false,
  };
  cleanGutters: Todo = {
    task: 'Clean the gutters',
    complete: false,
  };

  toDoList: object[] = [this.laundry, this.cleanBedroom, this.cleanGutters, this.feedDog, this.petDog, this.callSmother];

  constructor() { }

  removeTask(index: number): void {

  }

  ngOnInit() {
  }

}
