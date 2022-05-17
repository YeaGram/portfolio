import ProjectBG from "./components/myProjectBG"
import ProjCar from "./components/projCard"
const MyProject = () => {
    return(
        <div className="relative w-full h-full">
            <h3 className="font-bold text-5xl relative z-20 font-Poppins text-white drop-shadow-primDrop text-center">MyProject</h3>
            <ProjCar />
                <ProjectBG />
        </div>
    )
}
export default MyProject