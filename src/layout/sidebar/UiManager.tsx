import { IoCloseCircleOutline, IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "../../redux/ui-management/reduxHooks"
import { setShowMenu, setTheme } from "../../redux/ui-management/uiManagement"

const UiManager = () => {
    const {theme}=useAppSelector(store=>store.uiManagerReducer)
    const dispatch=useAppDispatch()
    return (
        <div className="flex justify-between items-center lg:justify-end">

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
    )
}

export default UiManager
