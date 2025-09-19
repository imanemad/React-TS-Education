import ButtonSubmit from "@/components/shared/ButtonSubmit";
import { GetTaskByDateService } from "@/services/task";
import { useEffect, useState } from "react"

const Dashboard = () => {
    const [todayTasks,setTodayTasks]=useState<TaskType[]>([])
    const handleGetTodayTasks=async()=>{
        const today=new Date().toISOString().split("T")[0];

        const res= await GetTaskByDateService(today)
        if(res.status === 200){
            setTodayTasks(res.data)
        }
    }

    useEffect(()=>{
        handleGetTodayTasks()
    },[])

    return (
        <div className="w-full h-full flex justify-center items-baseline">
            <div className="w-full max-w-96 h-full flex flex-col gap-10">
                {todayTasks?.length?(
                    <ul className="space-y-3 p-4 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
                        {todayTasks?.map(t=>(
                            <li key={t.id} 
                                className="w-full rounded-sm border-gray-400 border py-2 px-3 
                                    hover:shadow=md cursor-pointer transition-all"
                                    >
                                        {t.title}
                            </li>
                        ))}

                    </ul>
                ):(
                    <h1 className="mt-3 text-xl">امروز تسکی ندارید</h1>
                )}
                <ButtonSubmit title="افزودن وظیفه جدید"/>
            </div>
        </div>
    )
}

export default Dashboard
