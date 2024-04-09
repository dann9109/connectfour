
import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    axios.post('http://localhost:3000/api/login', {
      username,
      password
    })
    .then((response) => {
      console.log('Response:', response);
    })
    .catch((error) => {
      console.error(error);
    });
  }

  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }
  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  return (
    <div className="App">
    <h1>Welcome to the Game!</h1>
    <form action="">
      <label htmlFor="">
        Username:
        <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <br />
        <label htmlFor="">
        Password:
        <input type="text" value={password} onChange={handlePasswordChange} />
        <br />
      </label>
        <button type="submit">Submit</button>
    </form>
    </div>
  );
}

export default App;
