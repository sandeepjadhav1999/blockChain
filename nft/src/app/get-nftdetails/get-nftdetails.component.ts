import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-get-nftdetails',
  templateUrl: './get-nftdetails.component.html',
  styleUrls: ['./get-nftdetails.component.css']
})
export class GetNftdetailsComponent implements OnInit {
  nft = {
    userid : '',
    nftid : ''
  }
  validationFlag = false;

  constructor(private router : Router) { }
  RetrieveNFT(username : string) : void {
    if(!this.nft.userid || !this.nft.nftid) {
      this.validationFlag = true;
      return
    }
    this.validationFlag = false;
    this.router.navigateByUrl('nftdetails')
  }
  back(username : string) : void {
    this.router.navigateByUrl('userpage')
  }

  ngOnInit(): void {
  }

}
