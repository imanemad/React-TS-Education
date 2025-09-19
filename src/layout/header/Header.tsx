import { GiHamburgerMenu } from "react-icons/gi"
import { useAppDispatch } from "../../redux/ui-management/reduxHooks"
import { setShowMenu } from "../../redux/ui-management/uiManagement"
import { convertMiladiToJalali } from "@/utils/dateUtils"
import { BellIcon, CircleDotIcon, User2Icon } from "lucide-react"

function Header() {
    const dispatch=useAppDispatch()

    return (
        <section id="header" 
                className="
                    fixed 
                    top-0 
                    left-0 
                    h-header 
                    w-full 
                    flex
                    items-center
                    justify-between
                    bg-gray-300 

                    lg:pr-[400px]
                    
                    dark:bg-gray-600
                    dark:text-gray-300"
                    >

                    <button onClick={()=>dispatch(setShowMenu(true))}
                            className="lg:hidden px-4"
                            >
                            <GiHamburgerMenu />
                    </button>

                    <p className="text-gray-400 px-4 hidden lg:block dark:text-gray-400">{convertMiladiToJalali(undefined,"dddd, jD jMMMM jYYYY")}</p>

                    <div className="flex items-center px-4 gap-4">
                        <span className="relative">
                            <BellIcon className="text-gary-500"/>
                            <CircleDotIcon className="absolute top-0 right-0 text-red-500 animate-ping" size={10}/>
                        </span>
                        <span className="flex justify-center items-center size-10 ring-1 rounded-full">
                            <User2Icon/>
                        </span>
                        <p>نام کاربری</p>
                    </div>
        </section> 
    )
}

export default Header
