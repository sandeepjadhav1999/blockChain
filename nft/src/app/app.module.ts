import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { AllNFTsComponent } from './all-nfts/all-nfts.component';
import { AsAdminComponent } from './as-admin/as-admin.component';
import { AsUserComponent } from './as-user/as-user.component';
import { UserpageComponent } from './userpage/userpage.component';
import { GetNftdetailsComponent } from './get-nftdetails/get-nftdetails.component';
import { RetrieveNFTComponent } from './retrieve-nft/retrieve-nft.component';
import { GetuserdetailsComponent } from './getuserdetails/getuserdetails.component';
import { NftdetailsComponent } from './nftdetails/nftdetails.component';
import { AsExternaluserComponent } from './as-externaluser/as-externaluser.component';
import { NftDetails1Component } from './nft-details1/nft-details1.component';
import { AllNfts1Component } from './all-nfts1/all-nfts1.component';
import { ValidatenftComponent } from './validatenft/validatenft.component';
import { NftDetails2Component } from './nft-details2/nft-details2.component';
import { UploadComponent } from './upload/upload.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AdminComponent,
    UserComponent,
    AllNFTsComponent,
    AsAdminComponent,
    AsUserComponent,
    UserpageComponent,
    GetNftdetailsComponent,
    RetrieveNFTComponent,
    GetuserdetailsComponent,
    NftdetailsComponent,
    AsExternaluserComponent,
    NftDetails1Component,
    AllNfts1Component,
    ValidatenftComponent,
    NftDetails2Component,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
