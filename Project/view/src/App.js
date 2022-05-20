// import React & React-router-dom
import React, { Component } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

// import other components
import TopBar from './Components/TopBar/TopBar.jsx';
import Home from './Pages/Home/Home.jsx';
import Single from './Pages/Single/Single.jsx';
import Write from './Pages/Write/Write.jsx';
import Settings from './Pages/Settings/Settings.jsx';
import Login from './Pages/Login/Login.jsx';
import Register from './Pages/Register/Register.jsx';

// import style sheet
import './app.css';

class App extends Component {
  state = {
    user: true
  }
  render() {
    return (
      <BrowserRouter>

        <TopBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={this.state.user? <Home /> : <Register />} />
          <Route path='/login' element={this.state.user? <Home /> : <Login />} />
          <Route path='/write' element={this.state.user? <Write /> : <Register />} />
          <Route path='/settings' element={this.state.user? <Settings /> : <Register />} />
          <Route path='/post/:postId' element={this.state.user? <Single /> : <Register />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
