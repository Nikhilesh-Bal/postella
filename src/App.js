import React from 'react';
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import ViewPost from './components/ViewPost';
import LoginButton from './components/Login';
function App() {
  return (
    <React.Fragment>
    <BrowserRouter>
    <Routes>
        {/*<Route path={'/'} element={<Navigate to='/login'/>}/>*/}
        <Route path={'/'} element={<LoginButton/>}/>
        <Route path={'/home'} element={<Home/>}/>
        <Route path={`/view/${id}`} element={<ViewPost/>}/>
      </Routes>
    </BrowserRouter>  
      
    </React.Fragment>
  );
}

export default App;
