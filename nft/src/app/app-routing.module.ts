import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AllNFTsComponent } from './all-nfts/all-nfts.component';
import { AllNfts1Component } from './all-nfts1/all-nfts1.component';
import { AsAdminComponent } from './as-admin/as-admin.component';
import { AsExternaluserComponent } from './as-externaluser/as-externaluser.component';
import { AsUserComponent } from './as-user/as-user.component';
import { GetNftdetailsComponent } from './get-nftdetails/get-nftdetails.component';
import { GetuserdetailsComponent } from './getuserdetails/getuserdetails.component';
import { LoginComponent } from './login/login.component';
import { NftDetails1Component } from './nft-details1/nft-details1.component';
import { NftDetails2Component } from './nft-details2/nft-details2.component';
import { NftdetailsComponent } from './nftdetails/nftdetails.component';
import { RetrieveNFTComponent } from './retrieve-nft/retrieve-nft.component';
import { SignupComponent } from './signup/signup.component';
import { UploadComponent } from './upload/upload.component';
import { UserComponent } from './user/user.component';
import { UserpageComponent } from './userpage/userpage.component';
import { ValidatenftComponent } from './validatenft/validatenft.component';

const routes: Routes = [
  {path : 'login', component : LoginComponent},
  {path : 'signup', component : SignupComponent},
  {path : 'admin', component : AdminComponent},
  {path : 'user', component : UserComponent},
  {path : 'all-nfts', component : AllNFTsComponent},
  {path : 'as-admin', component:AsAdminComponent},
  {path : 'as-user', component : AsUserComponent},
  {path : 'userpage', component : UserpageComponent},
  {path : 'get-nftdetails', component : GetNftdetailsComponent},
  {path : 'retrieve-nft', component : RetrieveNFTComponent},
  {path : 'getuserdetails', component : GetuserdetailsComponent},
  {path : 'as-externaluser', component : AsExternaluserComponent},
  {path : 'nft-details1/:userName', component : NftDetails1Component},
  {path : 'all-nfts1', component : AllNfts1Component},
  {path : 'nftdetails', component : NftdetailsComponent},
  {path : 'validatenft', component : ValidatenftComponent},
  {path : 'nft-details2', component : NftDetails2Component},
  {path : 'upload', component:UploadComponent},
  {path : "", pathMatch:"full", redirectTo :"/login"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
