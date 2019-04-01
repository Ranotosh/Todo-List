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


  public addlist:any={
     id:'',title:'',is_canceled:false
  };
  

  classesToapply = new Array<boolean>();
  addTask() {
    this._todoService.addTask(this.addlist)
    .subscribe(data => {this.addlist=data,  console.log(this.addlist) }


    );

    this.alltask.push(

      {
        id:this.addlist.id,
        title: this.addlist.title,
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

  deleteTask(id: number,index) {
    let do_delete = confirm("Are you sure to delete the task?");

    if (do_delete) {
      this._todoService.deleteTask(id)
      .subscribe(data => console.log(data))
      this.alltask.splice(index, 1);;
    }
  }

  editTask(idx: number) {
    let title = this.alltask[idx].title;
    let result = prompt("Edit Task Title", title);
    this.alltask[idx].title=result;
    console.log(result);
    if (result !== null && result !== "") {
      this._todoService.updateTask(this.alltask[idx])
      .subscribe(() =>{this.alltask[idx].title=result,console.log(result)})
      
    }

  }




  clearToDo(index) {
    let do_deleteAll = confirm("Are you sure to delete all tasks?");
    if (do_deleteAll) {
      this._todoService.deleteAllTask(this.alltask)
      .subscribe(data => console.log(data))
      this.alltask.splice(index);
    }


  }

  constructor(private _todoService: TodoService) { }

  ngOnInit() {
    this._todoService.getTasks()
      .subscribe(data => { this.alltask = data, console.log(this.alltask) }

      );
  }

}
