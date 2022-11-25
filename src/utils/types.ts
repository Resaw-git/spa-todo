export interface IProject {
    id?: string;
    name?: string;
    tasks?: ITask[] | [];
}

export interface ITask {
    id: string;
    header: string;
    description: string;
    createdAt: string;
    timeProcess: boolean;
    finishedAt: string;
    prioritize: string;
    files: string;
    status: string;
    preTasks: ITask[];
    comments: string;
}