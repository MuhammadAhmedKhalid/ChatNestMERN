import { store } from './Redux/Store'
import { Provider } from 'react-redux'
import { Route, Routes } from 'react-router-dom';
import Home from './Components/HomeScreen/Home';
import LandingPage from './Components/LandingScreen/LandingPage';

function App() {
  return (
    <div className='bg'>
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/home' element={<Home/>}/>
          {/* path = * for no match */}
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
