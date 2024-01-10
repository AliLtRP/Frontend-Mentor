import Subscribe from './components/submit page/Subscribe';
import Main from './components/landing page/Main';
import { Route, Routes } from 'react-router-dom';
import './App.css'





function App() {


  return (
    <div className='main'>
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/sub' element={<Subscribe />}/>
      </Routes>
    </div>
  );
}

export default App