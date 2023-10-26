import '../Styling/Navbar.css'
import { useDispatch } from 'react-redux';
import { openSignIn, closeSignIn } from '../Redux/SignIn/Actions';
import { openSignUp, closeSignUp } from '../Redux/SignUp/Actions'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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

  const signout = async (storedToken:any) => {
    try { 
      const headers = {
        Authorization: `Bearer ${storedToken}`,
      };
      
      const response = await axios.post('http://localhost:5000/users/logout', {}, {headers});
      alert(response.data.message);
    } catch (error:any) {
      alert(error.response.data.error);
    }
  }

  const handleLogout = () => {
    signout(storedToken);
    localStorage.removeItem('jwt');
    navigate('/');
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
          <>
            {/* Show profile info and give edit access */}
            <p className="nav-link">My Profile</p> 
            <p className="nav-link" onClick={handleLogout}>Logout</p>
          </> :
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