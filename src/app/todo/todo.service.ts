import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ITask } from './ITask';

import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable()

export class TodoService {

    constructor(private _httpclient: HttpClient) { }

    //    getTasks(){
    //         return this._httpclient.get<any>("http://localhost:3000/tasks");
    //     }
    //     getTaskId(id) {
    //         return this._httpclient.get<any>("http://localhost:3000/tasks/" + id);
    //     }

    //     addTask(task:ITask){

    //         return this._httpclient.post<any>("http://localhost:3000/tasks/",task,{
    //             headers:new HttpHeaders({
    //                 'Content-type':'application/json'
    //             })
    //         });


    //     }
    //     updateTask(task){
    //     //    console.log(task);
    //         return this._httpclient.put<any>("http://localhost:3000/tasks/"+ task.id,task,{
    //             headers:new HttpHeaders({
    //                 'Content-type':'application/json'
    //             })
    //         });
    //     }
    //     deleteTask(id:number){
    //         return this._httpclient.delete<any>("http://localhost:3000/tasks/"+id);
    //     }
    //     deleteAllTask(allid){
    //         return this._httpclient.delete<any>("http://localhost:3000/tasks/",allid);
    //     }
    getAllTasks() {
        return this._httpclient.get<any>("http://127.0.0.1:3001/api/getAllTasks");
    }
    updateTask(id, iscomplete) {
        return this._httpclient.put<any>("http://127.0.0.1:3001/api/updateTask/" + id, iscomplete, {
            headers: new HttpHeaders({
                'Content-type': 'application/json'
            })
        });
    }
    addTask(task) {

        return this._httpclient.post<any>("http://127.0.0.1:3001/api/addTask", task, {
            headers: new HttpHeaders({
                'Content-type': 'application/json'
            })
        });

    }
    deleteTask(isActive) {

        return this._httpclient.put<any>("http://127.0.0.1:3001/api/deleteTask", isActive, {
            headers: new HttpHeaders({
                'Content-type': 'application/json'
            })
        });


    }
}