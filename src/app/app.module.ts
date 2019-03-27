import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 


import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';

import{TodoService} from './todo/todo.service';

import{SearchFilterPipe} from './todo/todosearch.pipe';
@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
