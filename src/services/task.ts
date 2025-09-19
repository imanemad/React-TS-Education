import httpService from "./_httpService"

//Partial باعث میشه مقادیر داخل تایپ مورد نظر اختیاری شوند، یعنی جلوی هر کدوم یک (؟) اضافه می کند
export const editTaskService=(
    taskId:string,
    task:Partial<AddTaskType>
)=>{
    return httpService(`/tasks/${taskId}`,"PATCH",task)
}

export const addTaskService = (task:AddTaskType)=>{
    return httpService(`/tasks`,"POST",task)
}

export const RemoveTaskService = (taskId:string)=>{
    return httpService(`/tasks/${taskId}`,"DELETE")
}

export const GetTaskByDateService = (date:string)=>{
    return httpService(`/tasks?startedAt_like=${date}`,"GET")
}