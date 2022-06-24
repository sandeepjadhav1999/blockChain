import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-nftdetails',
  templateUrl: './nftdetails.component.html',
  styleUrls: ['./nftdetails.component.css']
})
export class NftdetailsComponent implements OnInit {

  constructor(private router : Router) { 
    
  }
  back(username : String) : void {
    this.router.navigateByUrl('userpage')
  }

  ngOnInit(): void {
  }

}
