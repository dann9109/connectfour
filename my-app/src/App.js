import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import WelcomePage from './WelcomePage';
import { useNavigate, Route, Routes, BrowserRouter } from 'react-router-dom';

function App(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3000', { username, password })
      .then((response) => {
        console.log('Response:', response);
        navigate('/welcomepage');
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  return (
    
      <div className="App">
        <Routes>
          <Route path="/welcomepage" element={<WelcomePage {...props} username={username} />} />
          <Route path="/" element={<h1>Welcome to the Game</h1>} />
        </Routes>
        <form onSubmit={handleSubmit} action="/welcomepage">
          <label>
            Username:
            <input id="username" type="text" value={username} onChange={handleUsernameChange} />
          </label>
          <br />
          <label>
            Password:
            <input id="password" type="password" value={password} onChange={handlePasswordChange} />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
   
  );
}

export default App;