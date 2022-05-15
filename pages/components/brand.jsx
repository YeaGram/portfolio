import Image from "next/image"
const Brand = (props) => {
    return(
        <div className="order-1 flex">
            <div className="relative w-8 h-8">                
                <Image src={props.brand} alt="broken link" layout="fill" />
            </div>
            <h4 className="ml-2 font-Montserrat font-light text-2xl">YeaGram</h4>
        </div>
    )
}
export default Brand