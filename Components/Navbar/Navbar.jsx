import './Navbar.css'

const Navbar = () => {
  return (
    <div className='nav'>
        <div className="nav-logo">EV-CAR <img src="logo.jpeg" alt="" /></div>
        <ul className="nav-menu">
            <li>Home</li>
            <li>Explore</li>
            <li>About</li>
            <li className='nav-contact'>Contact</li>
        </ul>
    </div>
  )
}
export default Navbar