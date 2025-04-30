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

  public myList = [];

  searchText;

  public addlist: any = {
    title: '', active: true, status: false, iscompleted: false
  };

  addTask() {
    this._todoService.addTask(this.addlist)
      .subscribe(data => {
        this.addlist = data, this.getAllTask()
      });

    this.addlist.title = '';

  }

  cancelTask(task) {
    console.log(task)
    let do_complete = task.iscompleted  != true?confirm("Are you sure the task is completed?"):confirm("Are you sure the task is not completed yet?");
    if (do_complete) {
      var iscomplete = { "isCompleted": !task.iscompleted, "type": "Completed" };
      this._todoService.updateTask(task.id, iscomplete)
        .subscribe(data => { console.log(data), this.getAllTask() })
    }
  }

  deleteTask(task) {
    let do_delete = confirm("Are you sure to delete the task?");

    if (do_delete) {
      var isActive = { "active": false, "id": task.id }
      this._todoService.deleteTask(isActive)
        .subscribe(data => { console.log(data), this.getAllTask() }
        )
    }
  }

  editTask(task) {
    let title = task.title;
    let result = prompt("Edit Task Title", title);
    console.log(result);
    if (result !== null && result !== "") {
      var updatedTask = { "title": result, "type": "Title" };
      this._todoService.updateTask(task.id, updatedTask)
        .subscribe(() => {
          console.log(result), this.getAllTask()
        })
    }

  }




  // clearToDo(task, index) {

  //   task = this.alltask;
  //   for (var i = 0; i < task.length; i++) {
  //     this.allids.push(task[i].id);
  //   }
  //   console.log(this.allids);
  //   let do_deleteAll = confirm("Are you sure to delete all tasks?");
  //   if (do_deleteAll) {
  //     this._todoService.deleteAllTask(this.allids)
  //       .subscribe(data => console.log(data))
  //     this.alltask.splice(0);;
  //   }


  // }

  getAllTask() {
    this.myList = []
    this._todoService.getAllTasks()
      .subscribe(data => {
        for (let i = 0; i < data.body.data.length; i++) {
          if (data.body.data[i].active == true) {
            this.myList.push(data.body.data[i])
          }
        }
        console.log("newList", this.myList)
      })
  }

  constructor(private _todoService: TodoService) { }

  ngOnInit() {
    this.getAllTask();
  }

}
