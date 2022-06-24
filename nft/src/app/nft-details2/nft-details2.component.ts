import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-nft-details2',
  templateUrl: './nft-details2.component.html',
  styleUrls: ['./nft-details2.component.css']
})
export class NftDetails2Component implements OnInit {
  validate = {
    username : '',
    firstname : '',
    lastname : '',
    coursename : '',
    url : '',
    nftid : ''
  }
  validationFlag = false;

  constructor(private router : Router) { }
  Validate (username : string) : void {
    if(!this.validate.nftid||!this.validate.firstname){
      this.validationFlag=true;
      return
    }
    this.validationFlag = false;
  }
  popup() {
    if(this.validate.nftid){
    alert("Valid");
    return
    }
    alert("Invalid NFT ID")
  }
  LogOut(username : string) : void {
    this.router.navigateByUrl('login')
  }

  ngOnInit(): void {
  }

}
