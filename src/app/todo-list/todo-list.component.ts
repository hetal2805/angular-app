import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  items=[]

  constructor() { }

  ngOnInit() {
  }

  addNewItem(event){
    var newItem = event;
    this.items.push(newItem);
    
    }
    

}
