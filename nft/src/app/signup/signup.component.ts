import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router : Router) { }
  Signup(username : string) : void {
    this.router.navigateByUrl('login')
  }
  SignIn(username : string) : void {
    this.router.navigateByUrl('login')
  }

  ngOnInit(): void {
  }

}
