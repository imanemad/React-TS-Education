import { ToastContainer } from "react-toastify"
import AppContainer from "./components/containers/AppContainer"
import Content from "./layout/content/Content"
import Header from "./layout/header/Header"
import Sidebar from "./layout/sidebar/Sidebar"

function App() {
  return (
    <AppContainer>
      <Content />
      <Header />
      <Sidebar/>
      <ToastContainer stacked/>
    </AppContainer>
  )
}

export default App
