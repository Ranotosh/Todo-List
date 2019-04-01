import{Injectable} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import{ITask} from './ITask';

import {catchError} from 'rxjs/operators';
import{HttpClient,HttpErrorResponse,HttpHeaders} from '@angular/common/http';

@Injectable()

export class TodoService{

    constructor(private _httpclient:HttpClient){}

   getTasks(){
        return this._httpclient.get<any>("http://localhost:4002/tasks");
    }
    getTaskId(id) {
        return this._httpclient.get<any>("http://localhost:4002/tasks/" + id);
    }

    addTask(task:ITask){
    
        return this._httpclient.post<any>("http://localhost:4002/tasks/",task,{
            headers:new HttpHeaders({
                'Content-type':'application/json'
            })
        });
        

    }
    updateTask(task){
    //    console.log(task);
        return this._httpclient.put<any>("http://localhost:4002/tasks/"+ task.id,task,{
            headers:new HttpHeaders({
                'Content-type':'application/json'
            })
        });
    }
    deleteTask(id:number){
        return this._httpclient.delete<any>("http://localhost:4002/tasks/"+id);
    }
    deleteAllTask(task){
        return this._httpclient.delete<any>("http://localhost:4002/tasks/",task);
    }
}