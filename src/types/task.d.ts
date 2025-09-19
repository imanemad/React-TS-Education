
interface AddTaskType{
    title: string,
    groupCode?: string,
    description?: string,
    isDone: boolean,
    taskCategoryId: string,
    repetitionType?: number,
    repetitionItems?: number,
    includeVacation?: boolean,
    startedAt: string,
    endedAt?: string,
    createdAt: string
}

interface TaskType extends AddTaskType{
    id: string,
}

