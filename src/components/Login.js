import React,{useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let navigate=useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/login', {
        email,
        password,
      });
      localStorage.setItem('token', response.data.token);
      // navigate to Home feed page
      navigate('/home')
    } catch (error) {
      // handle error
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" to='/home'>Login</button>
    </form>
  );
}
export default Login;