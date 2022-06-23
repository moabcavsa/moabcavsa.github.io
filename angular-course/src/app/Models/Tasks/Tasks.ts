export class Task
{
    
    public UserId!: number;
    public Task!: string;
    public DayTask!: Date;


    constructor(userLogged: any)
    {
        this.UserId = userLogged.UserId;
        this.Task = userLogged.Task;
        this.DayTask = userLogged.DayTask;
    }
}