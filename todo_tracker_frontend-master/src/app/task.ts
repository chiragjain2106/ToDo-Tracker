export class Task{
    constructor(
      public taskId:number,
      public  taskTitle:String,
      public  taskDescription:string,
      public  category:String,
      public  taskImage: string,
       public date:Date,
     public  priority:String,
    ){}
}