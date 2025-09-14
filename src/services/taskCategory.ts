export const getTaskCategoriesServices= async()=>{
    const res=await fetch("http://localhost:4000/taskCategories")
    if(res.ok){

        return await res.json()
    }
    return null
}