import { TbSubtask } from "react-icons/tb"
import UiManager from "./UiManager"
import { GoHome } from "react-icons/go"
import { FaTasks } from "react-icons/fa"
import SidebarItem from "./SidebarItem"
import SidebarContainer from "../../components/containers/SidebarContainer"


function Sidebar() {
    console.log("Sidebar");
    
    return (
        <SidebarContainer>

                <UiManager/>

                <hr className="my-5 border-gray-600"/>

                <ul className="space-y-3">
                    <SidebarItem to={"/"} title="داشبورد" Icon={GoHome}/>
                    <SidebarItem to={"/Categories"} title="دسته بندی" Icon={TbSubtask}/>
                    <SidebarItem to={"/Tasks"} title="وظایف" Icon={FaTasks}/>
                </ul>
        </SidebarContainer>
    )
}

export default Sidebar
