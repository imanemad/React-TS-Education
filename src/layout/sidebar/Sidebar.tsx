import { TbSubtask } from "react-icons/tb"
import { useAppSelector } from "../../redux/ui-management/reduxHooks"
import UiManager from "./UiManager"
import { GoHome } from "react-icons/go"
import { FaTasks } from "react-icons/fa"
import SidebarItem from "./SidebarItem"


function Sidebar() {
    const {showMenu}=useAppSelector(store=>store.uiManagerReducer)
    
    return (
        <section id="sidebar" 
                className={`
                fixed 
                top-0 
                w-sidebar 
                h-screen 
                p-4
                border-l
                transition-all 
                bg-gray-300 

                lg:right-0 
                lg:block 
                
                dark:bg-gray-500
                dark:text-gray-200
                ${showMenu?"right-0":"-right-sidebar"}`}>

                <UiManager/>

                <hr className="my-5 border-gray-600"/>

                <ul className="space-y-3">
                    <SidebarItem to={"/"} title="داشبورد" Icon={GoHome}/>
                    <SidebarItem to={"/Categories"} title="دسته بندی" Icon={TbSubtask}/>
                    <SidebarItem to={"/Tasks"} title="وظایف" Icon={FaTasks}/>
                </ul>
        </section>
    )
}

export default Sidebar
