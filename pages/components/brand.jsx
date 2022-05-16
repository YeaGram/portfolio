import Image from "next/image"

const Brand = (props) => {
    return(
        <div className="order-1">
            <a href="" className="flex">
            <div id="logo" className="relative w-8 h-8 animate-myRotate">                
                <Image   src={props.brand} alt="broken link" layout="fill" />
            </div>
            <h4 className="ml-2 font-Montserrat font-light text-2xl">YeaGram</h4>
            </a>
        </div>
    )
}
export default Brand