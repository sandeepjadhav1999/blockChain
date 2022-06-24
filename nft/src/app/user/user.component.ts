import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit 
{
  newTaskForm: FormGroup|any;    
  constructor(private tasksService: UsersService, private router: Router)
  {
  }
  ngOnInit()
  {
    this.newTaskForm = new FormGroup({     //get the form details 
      aesKey: new FormControl(null, [ Validators.required ]),
      chainCodeId: new FormControl(null, []),
      courseName: new FormControl(null, [ Validators.required ]),
      docType: new FormControl(null, [ Validators.required ]),
      fName:new FormControl(null, [ Validators.required ]),
      itemCpyNum:new FormControl(null, [ Validators.required ]),
      itemID:new FormControl(null, [ Validators.required ]),
      itemImage:new FormControl(null, [ Validators.required ]),
      lName:new FormControl(null, [ Validators.required ]),
      name:new FormControl(null, [ Validators.required ]),
      nftId:new FormControl(null, [ Validators.required ]),
      nftOwner:new FormControl(null, [ Validators.required ]),
      nftStatus:new FormControl(null, [ Validators.required ]),
      nftURL:new FormControl(null, [ Validators.required ]),
      owner:new FormControl(null, [ Validators.required ]),
      price:new FormControl(null, [ Validators.required ]),
      symbol:new FormControl(null, [ Validators.required ]),
      timeStamp:new FormControl(null, [ Validators.required ]),
      

    });    
  }

  onCreateTaskClick(event:any)
  {
    this.newTaskForm["submitted"] = true;

    if (this.newTaskForm.valid)          
    {
      this.tasksService.insertProject(this.newTaskForm.value).subscribe(() => {
        this.router.navigate( ["nft-details1",this.newTaskForm.value.nftOwner ]); //calling the intersert task method from 
      }, (error) => {     //task service and subscribing. on successfully inserting the details              
        console.log(error);  //navigating to the task page (task.component)
      });
    }
    else
    {
      console.log(this.newTaskForm.errors);
    }
  }
}