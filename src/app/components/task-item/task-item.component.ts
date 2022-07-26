import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
@Input() task:Task | undefined;
text: string = '';
day: string | undefined = '';
faTimes = faTimes
  constructor() { }

  ngOnInit(): void {
    this.text = this.task?.text;
    this.day = this.task?.day;
  }
}
