import { GiHamburgerMenu } from "react-icons/gi"
import { useAppDispatch } from "../../redux/ui-management/reduxHooks"
import { setShowMenu } from "../../redux/ui-management/uiManagement"

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
        </section> 
    )
}

export default Header
