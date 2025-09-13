import type { ReactNode } from "react"
import { useAppSelector } from "../../redux/ui-management/reduxHooks"

const SidebarContainer = ({children}:{children:ReactNode}) => {
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

            {children}

        </section>
    )
}

export default SidebarContainer
