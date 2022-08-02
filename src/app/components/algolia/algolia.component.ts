import { Component, OnInit } from '@angular/core';
import algoliasearch from 'algoliasearch';
import { Task } from 'src/app/Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-algolia',
  templateUrl: './algolia.component.html',
  styleUrls: ['./algolia.component.css']
})
export class AlgoliaComponent implements OnInit {
  search!: any;
  search_client!:any;
  tasks: any=[];
  id!:number;
  // hits!:any;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks);
  }
  searching(search:any){
    const searchClient = algoliasearch('ECHY3U8HYG', '4bcf16b2ac6552abc5d155c3162714cb');
    this.search_client = searchClient.initIndex('dev_Algo');
    const requestOptions = {}
    this.search_client.search(search
    , requestOptions)
    .then(({ hits }:any) => {
      console.log(hits)
    });
  }
  selectOption(id: any) {
    //getted from event
    // console.log(id);
    //getted from binding
    console.log(id.this)
  }

}
