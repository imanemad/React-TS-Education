
function Sidebar(
    {
        showMenu,
        setHiddenMenu
    }:{
        showMenu:boolean,
        setHiddenMenu:()=>void
    }
) {
    return (
        <section 
            id="sidebar" 
            className={`fixed lg:right-0 top-0 w-sidebar h-screen bg-blue-400 lg:block transition-all 
            ${showMenu?"right-0":"-right-sidebar"}`}>

            sidebar

            <button onClick={setHiddenMenu}>
                مخفی کردن منو
            </button>
        </section>
    )
}

export default Sidebar
