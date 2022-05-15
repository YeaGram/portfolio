const nav = (props) => {
    return(
        <nav className={`navClass absolute w-32 bottom-full transition duration-[0] top-full mt-3 z-10 delay-100 
                ${props.doesActive ? "navContainerActive" : "navContainerNormal"}`}>
             <div className="navbarMenu relative flex overflow-hidden h-40">
                <a href="" className={`absolute transition-all duration-500 ease-[cubic-bezier(.86,-0.01,.08,1)]  top-0
                 ${props.doesActive ? "navActive" : "navNormal"}`}><span>Home</span></a>
                <a href="" className={`absolute transition-all duration-500 ease-[cubic-bezier(.86,-0.01,.08,1)] delay-[50ms] top-[25%]
                 ${props.doesActive ? "navActive" : "navNormal"}`}><span>About</span></a>
                <a href="" className={`absolute transition-all duration-500 ease-[cubic-bezier(.86,-0.01,.08,1)] delay-100  top-1/2
                 ${props.doesActive ? "navActive" : "navNormal"}`}><span>MyProject</span></a>
                <a href="" className={`absolute transition-all duration-500 ease-[cubic-bezier(.86,-0.01,.08,1)] delay-[150ms] top-3/4
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