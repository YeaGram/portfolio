const nav = (props) => {
    const navItem = {
        navitemstyle : 'bg-sun md:bg-inherit absolute md:static transition-all duration-500 ease-[cubic-bezier(.86,-0.01,.08,1)] rounded-lg w-[80%] md:w-auto drop-shadow-primDrop md:drop-shadow-none',
    }
    return(
        <nav className={`flex-1 absolute md:static md:order-2 w-32 md:w-auto bottom-full transition duration-[0] top-full mt-3 md:mt-0 z-10 delay-100 
                ${props.doesActive ? "navContainerActive" : "navContainerNormal"}`}>
             <div className="flex justify-end navbarMenu relative  overflow-hidden h-40 md:h-auto">
                <a href="" className={`${navItem.navitemstyle}  top-0
                 ${props.doesActive ? "navActive" : "navNormal"}`}><span>Home</span></a>
                <a href="" className={` delay-[50ms] top-[25%] ${navItem.navitemstyle}
                 ${props.doesActive ? "navActive" : "navNormal"}`}><span>About</span></a>
                <a href="" className={` delay-100  top-1/2  ${navItem.navitemstyle} 
                 ${props.doesActive ? "navActive" : "navNormal"}`}><span>MyProject</span></a>
                <a href="" className={` delay-[150ms] top-3/4 ${navItem.navitemstyle} 
                 ${props.doesActive ? "navActive" : "navNormal"}`}><span>Contact</span></a>                
                {/* <a href="" className="px-5 py-2 rounded-lg">Home</a>
                <a href="" className="px-5 py-2 rounded-lg">About</a>
                <a href="" className="px-5 py-2 rounded-lg">MyProject</a>
                <a href="" className="px-5 py-2 rounded-lg">Contact</a> */}
            </div>
        </nav>
    )
}
export default nav