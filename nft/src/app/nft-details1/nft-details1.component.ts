import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Users } from '../users';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-nft-details1',
  templateUrl: './nft-details1.component.html',
  styleUrls: ['./nft-details1.component.css']
})
export class NftDetails1Component implements OnInit {

  constructor(private router : Router,private activeRoute:ActivatedRoute, private userService:UsersService) { }

  taskName:any
  currentTask:Users =new Users()
  back(username : string) : void {
    this.router.navigateByUrl('admin')
  }

  ngOnInit(){
    this.activeRoute.params.subscribe((params)=>{
      this.taskName=params['userName']
      console.log(this.taskName)
    })

    this.userService.getuserbyuserName(this.taskName).subscribe(
      (response)=>{
        this.currentTask=response
        console.log(this.currentTask)
      }
    )

    

  }
  

}
