import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-validatenft',
  templateUrl: './validatenft.component.html',
  styleUrls: ['./validatenft.component.css']
})
export class ValidatenftComponent implements OnInit {

  constructor(private router : Router) { }
  Validate(username : string) : void {
    this.router.navigateByUrl('nft-details2')
  }
  LogOut(username : string) : void {
    this.router.navigateByUrl('login')
  }

  ngOnInit(): void {
  }

}
