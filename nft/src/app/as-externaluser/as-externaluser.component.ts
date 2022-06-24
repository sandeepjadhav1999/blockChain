import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-as-externaluser',
  templateUrl: './as-externaluser.component.html',
  styleUrls: ['./as-externaluser.component.css']
})
export class AsExternaluserComponent implements OnInit {

  constructor(private router : Router) { }
  ValidateNFT(username : string) : void {
    this.router.navigateByUrl('nftdetails1')
  }
  back(username : string) : void {
    this.router.navigateByUrl('login')
  }

  ngOnInit(): void {
  }

}
