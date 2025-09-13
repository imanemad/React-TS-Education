import Content from "./layout/content/Content"
import Header from "./layout/header/Header"
import Sidebar from "./layout/sidebar/Sidebar"
import { useAppSelector } from "./redux/ui-management/reduxHooks"

function App() {
  const {theme}=useAppSelector(state=>state.uiManagerReducer)

  return (
    <main className={`min-w-[320px] min-h-screen ${theme}`}>
      <Content />
      <Header />
      <Sidebar/>
    </main>
  )
}

export default App
