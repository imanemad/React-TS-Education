import httpService from "./_httpService"

export const getTaskCategoriesService= async()=>{
    const res=await httpService("/taskCategories","GET")
    if(res.status == 200 ){
        return await res.data
    }
    return null
}

export const gatTaskCategoriesWithTasksService= ()=>{
    return httpService("/taskCategories?_embed=tasks","GET")
}

export const addTaskCategoryService= (category:AddCategoryType)=>{
    return httpService("/taskCategories","POST",category)
}

export const removeTaskCategoryService= (categoryId:string)=>{
    return httpService(`/taskCategories/${categoryId}`,"DELETE")
}

export const updateTaskCategoryService= (categoryId:string,category:AddCategoryType)=>{
    return httpService(`/taskCategories/${categoryId}`,"PUT",category)
}