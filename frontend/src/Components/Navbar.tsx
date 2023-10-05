import '../Styling/Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <p className="nav-link">ChatNest</p>
      </div>
      <div className="navbar-right">
        <p className="nav-link">Sign In</p>
        <p className="nav-link">Sign Up</p>
      </div>
    </nav>
  )
}

export default Navbar