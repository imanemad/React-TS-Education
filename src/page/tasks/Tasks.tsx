import { addTaskService, editTaskService, RemoveTaskService } from "@/services/task";
import { gatTaskCategoriesWithTasksService } from "@/services/taskCategory";
import { compareDates, convertMiladiToJalali, getDatesInRange } from "@/utils/dateUtils"
import { successToast } from "@/utils/toastUtils";
import { useEffect, useState } from "react"

const Tasks = () => {
    const [dates,setDates]=useState<{miladi:string; jalali:string}[]>([])
    const [categories,setCategories]= useState<CategoryWhithTasksType[]>([])
    const [input,setInput]=useState<string>("")

    const generateDates=()=>{
        const resDates = getDatesInRange(3, 3);
        const resJalaliDates= resDates.map(date=>({
            miladi:date,
            jalali:convertMiladiToJalali(date),
        }))
        setDates(resJalaliDates)
    }

    const handleGetTasks = async()=>{
        const res = await gatTaskCategoriesWithTasksService()
        if(res.status === 200){
            setCategories(res.data)
        }
    }

    const handleCheckIsDone=async(task:TaskType)=>{
        const res = await editTaskService(task.id,{isDone:!task.isDone})
        if (res.status === 200){
            successToast()
            handleGetTasks()
        }
    }

    const handleClickCell=async(date:string,category:CategoryWhithTasksType)=>{
        if(!input.trim()) return null
        const res = await addTaskService({
            title:input,
            startedAt:date,
            taskCategoryId:category.id.toString(),
            isDone:false,
            createdAt:new Date().toISOString()
        })
        if(res.status === 201){
            successToast("وظیفه جدید اضافه شد")
            handleGetTasks()
            setInput("")
        }
    }

    const handleRemoveTask=async(e:React.MouseEvent<HTMLSpanElement, MouseEvent>,task:TaskType)=>{
        e.preventDefault()
        const res= await RemoveTaskService(task.id)
        if(res.status === 200){
            successToast()
            handleGetTasks()
        }
    }
    
    useEffect(()=>{
        generateDates()
    },[])
    
    useEffect(()=>{
        if (dates.length) handleGetTasks()
    },[dates])

    return (
        <div>
            <div className="flex justify-between items-center mb-4">
                <h1 className="font-bold text-lg">لیست وظایف</h1>
                <input type="text" 
                        placeholder="عنوان وظیفه جدید"
                        className="h-7 rounded-md bg-gray-300 text-gray-700 p-3"
                        onChange={(e)=>setInput(e.target.value)}
                        value={input}
                        autoFocus/>
            </div>
            <table className="table w-full rounded-lg overflow-hidden bg-white dark:bg-gray-600">
                <thead>
                    <tr className="border-b h-12 [&>th]:px-2 [&>th]:md:px-3 [&>th]:text-center">
                        <th>date</th>
                        {categories.map(c=>(
                            <th key={c.id}>{c.title}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {dates.map(date=>(
                        <tr key={date.miladi} className="border-b border-dashed h-9 dark:border-gray-500 [&>td]:px-2 [&>td]:md:px-3 [&>td]:text-center last:border-0">
                            <td>{date.jalali}</td>
                            {categories.map(c=>(
                                <td key={c.id} className={`text-center space-x-1 ${input.trim() && "hover:ring cursor-pointer"}`} 
                                    onClick={()=>handleClickCell(date.miladi,c)}
                                    >
                                    {c.tasks.map(t=>(
                                        <span className={` rounded-sm mx-1 text-sm ${t.isDone ? "bg-red-600" : "bg-blue-400"}`} key={t.id}>
                                            {compareDates(t.startedAt,date.miladi) && 
                                                <span className="p-2 pb-[0] cursor-pointer" 
                                                    onClick={()=>handleCheckIsDone(t)}
                                                    onContextMenu={(e)=>handleRemoveTask(e,t)}>
                                                        {t.title}
                                                </span>
                                            }
                                        </span>
                                    ))}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Tasks
