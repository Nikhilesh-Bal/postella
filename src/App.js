import React from 'react';
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
function App() {
  return (
    <React.Fragment>
    <BrowserRouter>
    <Routes>
        {/*<Route path={'/'} element={<Navigate to='/login'/>}/>
        <Route path={'/login'} element={<Login/>}/>*/}
        <Route path={'/home'} element={<Home/>}/>
      </Routes>
    </BrowserRouter>  
      
    </React.Fragment>
  );
}

export default App;
