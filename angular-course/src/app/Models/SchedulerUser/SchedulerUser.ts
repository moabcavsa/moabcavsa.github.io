export class SchedulerUser
{
    public TaskId! : number;
    public Date!: Date;
    public Memo!: string;
    public Count!: number;

    constructor(userInput?: any)
    {
        this.TaskId = userInput?.TaskId;
        this.Date = new Date(userInput?.Date)
        this.Memo = userInput?.Memo;
        this.Count = userInput?.Count;
    }
}