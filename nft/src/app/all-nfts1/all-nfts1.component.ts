import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-all-nfts1',
  templateUrl: './all-nfts1.component.html',
  styleUrls: ['./all-nfts1.component.css']
})
export class AllNfts1Component implements OnInit {

  constructor(private router : Router) { }
  back(username : string) : void {
    this.router.navigateByUrl('userpage')
  }

  ngOnInit(): void {
  }

}
