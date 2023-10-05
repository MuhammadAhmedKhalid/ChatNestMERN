import '../../Styling/LandingScreen.css'
import { useSelector } from 'react-redux';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

function CenterBox() {

  const isSignIn = useSelector((state:any) => state.signInReducer.isSignIn);
  const isSignUp = useSelector((state:any) => state.signUpReducer.isSignUp);

  return (
    <div className="center-rectangle">
      <div className="right-side">
        {
          isSignIn ? <SignInForm/> : isSignUp ? <SignUpForm/> : 
          <>
            <p className="h-content">Welcome to ChatNest! 🌟</p>
            <p className='p-content'>
              ChatNest brings people together in real-time conversations that 
              transcend distances. Whether you're here to catch up with friends, 
              meet new ones, or dive into captivating group discussions, ChatNest 
              is your inviting haven. Get ready to explore our diverse chat rooms, 
              each designed to cater to your unique interests and passions. 
              With seamless messaging, expressive emojis, and a warm atmosphere, 
              ChatNest is more than an app; it's your digital home for connecting, 
              sharing, and creating lasting memories. Join the nest, spread your 
              wings, and let the conversations soar! 🚀🐦
            </p>
          </>
        }
      </div>
    </div>
  )
}

export default CenterBox