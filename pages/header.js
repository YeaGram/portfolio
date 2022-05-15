import Hamburger from './components/hamburger'
import Nav from './components/nav' 
import Brand from './components/brand'
import BrandPict from '/public/mylogo.png'
import {useState} from 'react';


const Header = () => {
    // checkForHamburgerMenu
    const [hamburgerNormal, setHamburgerActive] = useState(false);
    const navTogler = ()=> {
        setHamburgerActive(!hamburgerNormal);
    }
    return(
        <div className='flex justify-between items-center px-4 py-2 relative shadow-md '>
            <Brand brand={BrandPict}/>
            <div onClick={navTogler} className="block cursor-pointer order-2">
                <Hamburger doesActive={hamburgerNormal} />
            </div>
            <Nav doesActive={hamburgerNormal}/>
        </div>
    )
}
export default Header