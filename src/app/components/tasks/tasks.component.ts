import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  taskList: Tarea[] = [];
  taskName = '';

  constructor() { }

  ngOnInit(): void {
  }

  addTask() {
    const task: Tarea = {
      name: this.taskName,
      state : false
    }
    this.taskList.push(task);

    this.taskName = '';
  }

  delete(index: number) {
    this.taskList.splice(index, 1);
  }

  update(task: Tarea, index: number) {
    this.taskList[index].state = !task.state;
  }
}
