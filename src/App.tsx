import { useState } from "react"
import Content from "./layout/content/Content"
import Header from "./layout/header/Header"
import Sidebar from "./layout/sidebar/Sidebar"

function App() {
  const[showMenu,setShowMenu]=useState(false)

  return (
    <>
      <Content />
      <Header  setShowMenu={()=>setShowMenu(!showMenu)}/>
      <Sidebar showMenu={showMenu} setHiddenMenu={()=>setShowMenu(!showMenu)}/>
    </>
  )
}

export default App
