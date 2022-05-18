
import AboutContent from "./components/about-content";

export default function About() {
    return(
        <div>
            <div className="relative bg-mountainEnd overflow-x-hidden w-full h-screen">
                <div className="relative bg-mountainEnd w-screen h-full">
                    <AboutContent />
                </div>
            </div>
            <span className="absolute bg-mountainEnd block w-full h-screen"></span>
        </div>
    );
}