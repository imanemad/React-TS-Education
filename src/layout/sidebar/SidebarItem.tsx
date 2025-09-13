import type { IconType } from "react-icons"
import { NavLink, type To } from "react-router";

type SidebarItemType={
    title:string;
    Icon:IconType;
    to:To
};

const SidebarItem = ({title,Icon,to}:SidebarItemType) => {
    return (
        <li>
            <NavLink 
                to={to} 
                className={({isActive})=>`flex items-center gap-2 p-1 rounded-md transition-all ${isActive && "bg-gray-400 text-gray-800"}`
                }>
                    
                <Icon size={20} className="mb-1"/>
                {title}
            </NavLink>
        </li>
    )
}

export default SidebarItem
