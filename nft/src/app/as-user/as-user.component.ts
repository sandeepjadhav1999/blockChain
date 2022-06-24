import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-as-user',
  templateUrl: './as-user.component.html',
  styleUrls: ['./as-user.component.css']
})
export class AsUserComponent implements OnInit {
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
    this.router.navigateByUrl('userpage')
  }
  back (username : string) : void {
    this.router.navigateByUrl('login')
  }

  ngOnInit(): void {
  }

}
