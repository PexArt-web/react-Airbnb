import logo from '../images/Airbnb_Logo_Bélo.svg.png'
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <img className='nav--img' alt='air bnb' src = {logo}/>
        </nav>
     );
}
 
export default Navbar;