import { Component, OnInit, TemplateRef, Input, ElementRef } from '@angular/core';
import { TodoService } from './todo.service';
import { ITask } from './ITask';
interface Task {
  title: string,
  is_canceled: boolean
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {


  public alltask;

  public taskIp;

  searchText;

  filteredPosts = [];

  originalPosts = [];

  filtered_tasks: any = this.alltask;

  classesToapply = new Array<boolean>();
  addTask() {

    this.alltask.push(

      {
        title: this.taskIp,
        is_canceled: false
      }
    );

  }

  cancelTask(idx: number) {
    if (this.alltask[idx].is_canceled) {
      this.alltask[idx].is_canceled = false;
      this.classesToapply[idx] = false;
      console.log(this.classesToapply[idx]);

    } else {
      this.alltask[idx].is_canceled = true;
      this.classesToapply[idx] = true;
      console.log(this.classesToapply[idx]);
    }

  }

  deleteTask(idx: number) {
    let do_delete = confirm("Are you sure to delete the task?");
    if (do_delete) {
      this.alltask.splice(idx, 1);
    }
  }

  editTask(idx: number) {
    let title = this.alltask[idx].title;
    let result = prompt("Edit Task Title", title);
    if (result !== null && result !== "") {
      this.alltask[idx].title = result;
    }

  }


  filter() {
    // this.filteredPosts = this.alltask.filter(task => task.id === -1);
    // console.log(this.filteredPosts)
    // if(!this.alltask || !this.searchText){

    //   // console.log(tasks);

    //   return this.alltask;

    // }

    // else{
    //   console.log(this.alltask);

    //   return this.alltask.filter(task=>task.title.toLowerCase().indexOf(this.searchText.toLowerCase()) !== -1);

    // }

  }



  clearToDo(index) {
    this.alltask.splice(index)

  }

  constructor(private _todoService: TodoService) { }

  ngOnInit() {
    this._todoService.getTasks()
      .subscribe(data => { this.alltask = data, console.log(this.alltask) }

      );
  }

}
