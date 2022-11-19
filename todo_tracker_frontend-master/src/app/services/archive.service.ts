import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArchiveService {

  constructor( private http:HttpClient) { }

  public UnArchiveTask(archiveId:any){
    return this.http.post("http://localhost:9000/api/v4/unArchive/"+archiveId,{responseType:'text' as 'json'});
  }

  public showArchive(email:any){
    return this.http.get("http://localhost:9000/api/v4/showArchive/"+email,{responseType:'json' as 'text'});
  }

  public deleteTask(archiveId:any){
    return this.http.delete("http://localhost:9000/api/v4/delete/"+archiveId,{responseType:'text' as 'json'});
  }

}
