const ProjCar = () => {
    return(
        <div className="relative mt-3 z-20 w-[80%] mx-auto flex flex-col">
            {/* HaveProject */}
            <div className="relative mt-3 w-full h-full mx-auto">
                <div className="rounded-t-3xl bg-gray-300 w-[80%] h-56 max-h-80 mx-auto grid place-items-center">
                    gak ada :v
                </div>
                <div className="bg-[#162C46] relative rounded-2xl w-full h-32 px-4">
                    <div className="flex justify-between items-center  py-1">
                        <h4 className="block font-Poppins text-white font-bold text-2xl">Project</h4>
                        <div className="flex items-end flex-col justify-between h-3">
                            <div className="w-32 h-1 bg-white opacity-80"></div>
                            <div className="w-20 h-1 bg-white"></div>
                        </div>
                    </div>
                    <div>
                        <p className="font-bold font-Poppins text-white leading-4">do you ever look at someone and wonder what is going on inside their head?</p>
                    </div>
                    <div className="absolute left-1/2 bottom-0 -translate-x-1/2 -translate-y-1/2">
                        <div className="w-6">
                            <svg viewBox="0 0 14.575439 8.863281" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
                            <g id="Triangle" transform="translate(1.5 1.5)">
                                <path d="M5.78778 0L11.5756 5.86324L0 5.86324L5.78778 0Z" id="Triangle" fill="none" fillRule="evenodd" stroke="#FFFFFF" strokeWidth="2" />
                            </g>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-4 w-full h-20 grid place-items-center bg-[#ffffff11] text-xl text-[#ffffff50] tracking-[.5rem] font-OpenSans font-bold">
                cooming soon
            </div>
            <div className="mt-2 w-full h-20 grid place-items-center bg-[#ffffff11] text-xl text-[#ffffff50] tracking-[.5rem] font-OpenSans font-bold">
                cooming soon
            </div>
        </div>
    )
}
export default ProjCar