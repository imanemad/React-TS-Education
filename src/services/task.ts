export const getTasksServices= async()=>{
    const res=await fetch("http://localhost:4000/tasks")
    return await res.json()
}