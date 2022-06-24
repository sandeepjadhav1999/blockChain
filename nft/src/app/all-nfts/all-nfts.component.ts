import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Users } from '../users';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-all-nfts',
  templateUrl: './all-nfts.component.html',
  styleUrls: ['./all-nfts.component.css']
})
export class AllNFTsComponent implements OnInit {


  nfts:Users[]=[]
  constructor(private router : Router, private userService:UsersService) { }
  back(user : string) : void {
    this.router.navigateByUrl('admin')
  }

  ngOnInit(){
    this.userService.getAllProjects().subscribe(
      (response)=>{
        this.nfts=response
        console.log(this.nfts)
      }
    )
  }

}
