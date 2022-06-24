import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {

  constructor(private router : Router) { }
  Retrieve (username : string) : void {
    this.router.navigateByUrl('get-nftdetails')
  }
  RetrieveAll(username : string) : void {
    this.router.navigateByUrl('getuserdetails')
  }
  LogOut(username : string) : void {
    this.router.navigateByUrl('login')
  }

  ngOnInit(): void {
  }

}
