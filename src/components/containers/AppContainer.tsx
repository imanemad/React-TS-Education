import type { ReactNode } from "react"
import { useAppSelector } from "../../redux/ui-management/reduxHooks"

const AppContainer = ({children}:{children:ReactNode}) => {
    const {theme}=useAppSelector(state=>state.uiManagerReducer)

    return (
        <main className={`min-w-[320px] min-h-screen ${theme}`}>
            {children}
        </main>
    )
}

export default AppContainer
