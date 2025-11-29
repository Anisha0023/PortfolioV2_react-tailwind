function Sidebar(){
    return(
        <>
         <nav>
           <div className="w-full max-w-50 bg-yellow-500 py-8 flex justify-end gap-10 text-lg pr-20 ">
                <a href="#about"  className="hover:text-xl">About</a>
                <a href="#project" className="hover:text-xl">Projects</a>
                <a href="#contact" className="hover:text-xl">Contact</a>
            </div>
           
        </nav>
        </>
    )

}
export default Sidebar;