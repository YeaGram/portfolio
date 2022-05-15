const Hamburger = (props) => {
    return (
        <div className={`${props.doesActive ? "hamburgerActive" : "hamburgerNormal" }`}>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
        </div>
    )
}
export default Hamburger;