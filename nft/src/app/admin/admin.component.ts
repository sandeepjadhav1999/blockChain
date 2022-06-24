import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient, HttpClientModule } from "@angular/common/http";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  file : any;

  constructor(private router : Router, private http : HttpClient) { }
  GetNFT(username : string) : void {
    this.router.navigateByUrl('user')
  }
  AllNFT (username : string) : void {
    this.router.navigateByUrl('all-nfts')
  }
  Upload(file : any){
    this.router.navigateByUrl('upload')
  }
  LogOut(username : string): void {
    this.router.navigateByUrl('login')
  }

  ngOnInit(): void {
  }

}
