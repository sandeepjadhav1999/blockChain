import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router : Router) { }
  SignUp(username : string) : void {
    this.router.navigateByUrl('as-admin');
  }
  LogIn(username : string) : void {
    this.router.navigateByUrl('as-user')
  }
  ValidateNFT(username : string) : void {
    this.router.navigateByUrl('validatenft')
  }

  ngOnInit(): void {
    
  }

}
