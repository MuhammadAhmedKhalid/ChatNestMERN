import '../Styling/Navbar.css'
import { useDispatch } from 'react-redux';
import { openSignIn, closeSignIn } from '../Redux/SignIn/Actions';
import { openSignUp, closeSignUp } from '../Redux/SignUp/Actions'

function Navbar() {

  const dispatch = useDispatch();

  const handleSignIn = () => {
    dispatch(openSignIn());
    dispatch(closeSignUp());
  }

  const handlSignUp = () => {
    dispatch(openSignUp());
    dispatch(closeSignIn());
  }

  const handleHome = () => {
    dispatch(closeSignUp());
    dispatch(closeSignIn());
  }

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <p className="nav-link" style={{fontWeight: 'bold'}} onClick={handleHome}>ChatNest</p>
      </div>
      <div className="navbar-right">
        <p className="nav-link" onClick={handleSignIn}>Sign In</p>
        <p className="nav-link" onClick={handlSignUp}>Sign Up</p>
      </div>
    </nav>
  )
}

export default Navbar