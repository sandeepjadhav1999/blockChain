import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-getuserdetails',
  templateUrl: './getuserdetails.component.html',
  styleUrls: ['./getuserdetails.component.css']
})
export class GetuserdetailsComponent implements OnInit {
  nft = {
    userid : ''
  }
  validationFlag = false;

  constructor(private router : Router) { }
  RetrieveallNFTs(username : string) : void {
    if(!this.nft.userid){
      this.validationFlag = true;
      return 
    }
    this.validationFlag = false;
    this.router.navigateByUrl('all-nfts1')
  }
  back(username : string) : void {
    this.router.navigateByUrl('userpage')
  }

  ngOnInit(): void {
  }

}
