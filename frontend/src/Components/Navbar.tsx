import '../Styling/Navbar.css'
import { useDispatch } from 'react-redux';
import { openSignIn, closeSignIn } from '../Redux/SignIn/Actions';
import { openSignUp, closeSignUp } from '../Redux/SignUp/Actions'
import { useNavigate } from 'react-router-dom';

function Navbar() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const storedToken = localStorage.getItem('jwt');

  const handleSignIn = () => {
    dispatch(openSignIn());
    dispatch(closeSignUp());
  }

  const handleSignUp = () => {
    dispatch(openSignUp());
    dispatch(closeSignIn());
  }

  const handleLogout = () => {
    localStorage.removeItem('jwt');
    navigate('/');
    // call logout endpoint which will expire jwt
  }

  const handleLogo = () => {
    dispatch(closeSignUp());
    dispatch(closeSignIn());
  }

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <p className="nav-link" style={{fontWeight: 'bold'}} onClick={handleLogo}>ChatNest</p>
      </div>
      <div className="navbar-right">
        {
          storedToken !== null ? 
          <p className="nav-link" onClick={handleLogout}>Logout</p> :
          <>
            <p className="nav-link" onClick={handleSignIn}>Sign In</p>
            <p className="nav-link" onClick={handleSignUp}>Sign Up</p>
          </>
        }
      </div>
    </nav>
  )
}

export default Navbar