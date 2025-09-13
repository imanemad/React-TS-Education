import { IoCloseCircleOutline, IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "../../redux/ui-management/reduxHooks"
import { setShowMenu, setTheme } from "../../redux/ui-management/uiManagement"

function Sidebar() {
    const {showMenu, theme}=useAppSelector(store=>store.uiManagerReducer)
    const dispatch=useAppDispatch()
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
                bg-gray-400 

                lg:right-0 
                lg:block 
                
                dark:bg-gray-600
                dark:text-gray-200
                ${showMenu?"right-0":"-right-sidebar"}`}>

                <div className="flex justify-between items-center">

                    <button 
                        onClick={()=>dispatch(setShowMenu(false))}
                        className="lg:hidden">
                        <IoCloseCircleOutline size={24}/>
                    </button>

                    <button onClick={()=>dispatch(setTheme())}>
                        {theme==="light" ?
                            <IoMoonOutline size={20}/>
                            :
                            <IoSunnyOutline size={21}/>
                        }
                    </button>

                </div>
        </section>
    )
}

export default Sidebar
