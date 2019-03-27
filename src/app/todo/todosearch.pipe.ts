import { Pipe, PipeTransform,Injectable } from '@angular/core';
import{ITask} from './ITask';
@Pipe({
 name: 'searchfilter'
})

@Injectable()

export class SearchFilterPipe implements PipeTransform {
    transform(tasks: ITask[], searchText: string):ITask[]{
    if(!tasks || !searchText){
      
      return tasks;
    }

    else{
      return tasks.filter(task=>task.title.toLowerCase().indexOf(searchText.toLowerCase()) !== -1);

    }
  }

    
}