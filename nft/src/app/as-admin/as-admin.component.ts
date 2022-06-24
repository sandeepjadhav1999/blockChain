import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-as-admin',
  templateUrl: './as-admin.component.html',
  styleUrls: ['./as-admin.component.css']
})
export class AsAdminComponent implements OnInit {
  userObj  = {
    userName : '',
    userPassword :''
    }
    validationFalg=false;

  constructor(private router : Router) { }
  SignUp(username : string) : void {
    if(!this.userObj.userName || !this.userObj.userPassword) {
      this.validationFalg = true;
      return
    }
    this.validationFalg = false;
    this.router.navigateByUrl('admin');
  }
  back (username : string){
    this.router.navigateByUrl('login')
  }

  ngOnInit(): void {
  }

}
