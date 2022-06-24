import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  file : any;


  constructor(private http : HttpClient, private router : Router) { }
  getFile (event : any){
    this.file = event.target.files[0];
    console.log('file', this.file);
  }
  Submitdata(){
    let formData = new FormData();
    formData.set('file', this.file);
    this.http.post('url',formData).subscribe ((response)=> {});
  }
  Back (file : any){
    this.router.navigateByUrl('admin')
  }

  ngOnInit(): void {
  }

}
