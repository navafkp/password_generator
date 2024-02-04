import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from './Page/Login';
import Home from './Page/Home';
import Register from './Page/Register';

function App() {
  return (
    <div className="App">
      <Router >
        <Routes>
          <Route exact path='/' element={<Login/>}/>
          <Route path='/home' element={<Home/>}/>
          {/* <Route path='/register' element={!is_authenticated ? <Register /> : <Navigate to='/home' />} /> */}
          <Route path='/register' element={<Register />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
