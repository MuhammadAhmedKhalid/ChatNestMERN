import '../Styling/Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a className="nav-link">ChatNest</a>
      </div>
      <div className="navbar-right">
        <a className="nav-link">Sign In</a>
        <a className="nav-link">Sign Up</a>
      </div>
    </nav>
  )
}

export default Navbar