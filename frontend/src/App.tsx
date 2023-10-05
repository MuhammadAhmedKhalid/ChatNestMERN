import Navbar from './Components/Navbar';
import CenterBox from './Components/LandingScreen/CenterBox';
import { store } from './Redux/Store'
import { Provider } from 'react-redux'

function App() {
  return (
    <div className='bg'>
      <Provider store={store}>
        <Navbar/>
        <CenterBox/>
      </Provider>
    </div>
  );
}

export default App;
