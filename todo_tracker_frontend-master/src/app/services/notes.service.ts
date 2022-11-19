import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from 'src/app/task';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private http:HttpClient) { }

  public addTask(email:any,task:Task)
  {
    return this.http.post("http://localhost:9000/api/v3/addTask/"+email,task,{responseType:'text' as 'json'});
  }

  public setTaskImage(email:any,taskId:any,image:any)
  {
    return this.http.put("http://localhost:9000/api/v3/addTaskImage/"+email+"/"+taskId,image,{responseType:'text' as 'json'});
  }

  public removeTaskImage(email:any,taskId:any)
  {
    return this.http.put("http://localhost:9000/api/v3/deleteTaskImage/"+email+"/"+taskId,{responseType:'text' as 'json'});
  }

  public removeTaskCaegory(email:any,taskId:any)
  {
    return this.http.put("http://localhost:9000/api/v3/deleteTaskCategory/"+email+"/"+taskId,{responseType:'text' as 'json'});
  }
  

  public updateTask(email:any,taskId:any,task:Task)
  {
    return this.http.put("http://localhost:9000/api/v3/update/"+email+"/"+taskId,task,{responseType:'text' as 'json'});
  }

  public setTaskCategory(email:any,taskId:any,label:any)
  {
    return this.http.put("http://localhost:9000/api/v3/addTaskCategory/"+email+"/"+taskId,label,{responseType:'text' as 'json'});
  }

  public setTaskPriority(email:any,taskId:any,priority:any)
  {
    return this.http.put("http://localhost:9000/api/v3/addTaskPriority/"+email+"/"+taskId,priority,{responseType:'text' as 'json'});
  }
  

  public getAlltasks(email:any){
    return this.http.get("http://localhost:9000/api/v3/showTask/"+email,{responseType:'json' as 'text'});
   }

   public getUser(email:any){
    return this.http.get("http://localhost:9000/api/v2/findUser/"+email);
  }

  public deleteTask(email:any,taskId:any){
    return this.http.delete("http://localhost:9000/api/v3/delete/"+email+"/"+taskId,{responseType:'text' as 'json'});
  }
      
  public archiveTask(email:any,taskId:any){
    return this.http.post("http://localhost:9000/api/v3/archiveTask/"+email+"/"+taskId,{responseType:'text' as 'json'});
  }

  public categorization(email:any,category:any){
    return this.http.get("http://localhost:9000/api/v5/showTaskListByCategory/"+email+"/"+category,{responseType:'json' as 'text'});
  }

  public setUserImage(email:any,image:any)
  {
    return this.http.post("http://localhost:9000/api/v2/setUserImage/"+email,image,{responseType:'text' as 'json'});
  }

  public sortTaskByDates(email:any)
  {
    return this.http.get("http://localhost:9000/api/v5//showSortedTaskListByDates/"+email,{responseType:'json' as 'text'});
  }

  public sortTaskByPriority(email:any,order:any)
  {
    return this.http.get("http://localhost:9000/api/v5/sortByPriority/"+email+"/"+order,{responseType:'json' as 'text'});
  }

  public searchTaskByDates(email:any,date:any)
  {
    return this.http.get("http://localhost:9000/api/v5/searchTaskByDates/"+email+"/"+date,{responseType:'json' as 'text'});
  }

  public todayTask(email:any)
  {
    return this.http.get("http://localhost:9000/api/v5/todayTask/"+email,{responseType:'json' as 'text'});
  }

  public archiveCompletedTask(email:any)
  {
    return this.http.post("http://localhost:9000/api/v3/archiveCompletedTask/"+email,{responseType:'json' as 'text'});
  }

  
  public setTaskColor(email:any,taskId:any,color:any)
  {
    return this.http.put("http://localhost:9000/api/v3/addTaskColor/"+email+"/"+taskId+"/"+color,{responseType:'text' as 'json'});
  }

  
  }

