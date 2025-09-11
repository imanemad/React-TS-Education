
function Header(
    {setShowMenu}:{setShowMenu:()=>void}
) {

    return (
        <section id="header" className="fixed top-0 left-0 h-header w-full bg-red-400 lg:pr-[400px]">
            <button onClick={setShowMenu}>نمایش منو</button>
        </section> 
    )
}

export default Header
