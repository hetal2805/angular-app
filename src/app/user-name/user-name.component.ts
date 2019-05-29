import { Component, OnInit } from '@angular/core';
import {UserDataService} from '../user-data.service';


@Component({
  selector: 'app-user-name',
  templateUrl: './user-name.component.html',
  styleUrls: ['./user-name.component.css']
})
export class UserNameComponent implements OnInit {
  
  users$: object;
  constructor(private userdataService:UserDataService) { }

  ngOnInit() {
  }

  showData(){
    this.userdataService.getData().subscribe( data => this.users$ = data)

  }

}
