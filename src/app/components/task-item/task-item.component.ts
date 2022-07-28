import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
@Input() task:Task|undefined;
@Output() onDeleteTask: EventEmitter<Task>=new EventEmitter();
@Output() onToggleReminder: EventEmitter<Task>=new EventEmitter();
text: string = '';
day: string | undefined = '';
reminder: boolean |undefined = false;
faTimes = faTimes;
  constructor() { }

  ngOnInit(): void {
    this.text = this.task?.text;
    this.day = this.task?.day;
    this.reminder =this.task?.reminder;
  }
  onDelete(task:any){
    this.onDeleteTask.emit(task);
  }
  onToggle(task:any){
    this.onToggleReminder.emit(task);
  }

}
