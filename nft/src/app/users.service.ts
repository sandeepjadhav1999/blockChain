import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class UsersService
{
  urlPrefix: string = "http://localhost:3001"; //make this as empty ("") if you are using asp.net core [without CORS]

  constructor(private httpClient: HttpClient)
  {
  }

  getAllProjects(): Observable<Users[]>
  {
    return this.httpClient.get<Users[]>(this.urlPrefix + "/nft/retrieveAllNFTs");
  }

  insertProject(newProject: Users): Observable<Users>
  {
    return this.httpClient.post<Users>(this.urlPrefix + "/nft/issueNFT", newProject);
  }
  getuserbyuserName(firstName:Users):Observable<Users> //making a get request and the response type os Json
  {
    //getting the task details of a specific task.. this method is used of the task updation
    return this.httpClient.get<Users>(this.urlPrefix+"/nft/retrieveAllNFTSForUser/"+firstName,{responseType:"json"})
  }
}
