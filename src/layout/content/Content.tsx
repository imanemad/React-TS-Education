import { Route, Routes } from "react-router"
import Dashboard from "../../page/dashboard/Dashboard"
import Categories from "../../page/categories/Categories"
import Tasks from "../../page/tasks/Tasks"

function Content() {
    return (
        <section id="content" 
                className="
                fixed
                top-0 
                left-0
                pt-16 
                w-full 
                h-screen 
                overflow-y-auto

                lg:pr-[400px] 

                dark:bg-gray-700
                dark:text-gray-200
                ">
                
                <div className="p-4">
                    <Routes>
                        <Route path="/" Component={Dashboard}/>
                        <Route path="/Categories" Component={Categories}/>
                        <Route path="/Tasks" Component={Tasks}/>
                    </Routes>
                </div>
        </section>
    )
}

export default Content
