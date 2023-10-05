import '../Styling/Navbar.css'
import { useDispatch } from 'react-redux';
import { openSignIn } from '../Redux/SignIn/Actions';
import {  openSignUp } from '../Redux/SignUp/Actions'

function Navbar() {

  const dispatch = useDispatch();

  const handleSignIn = () => {
    dispatch(openSignIn());
  }

  const handlSignUp = () => {
    dispatch(openSignUp());
  }

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <p className="nav-link" style={{fontWeight: 'bold'}}>ChatNest</p>
      </div>
      <div className="navbar-right">
        <p className="nav-link" onClick={handleSignIn}>Sign In</p>
        <p className="nav-link" onClick={handlSignUp}>Sign Up</p>
      </div>
    </nav>
  )
}

export default Navbar