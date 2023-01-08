import { useState } from 'react';
import * as usersService from '../../utilities/users-service';
import "./LoginForm.css";

export default function LogIn({ setUser, location }) {
  const [forgot, setForgot] = useState(false);
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    location: location,
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }
  function handleForgot(event) {
    setForgot(!forgot);
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <div>
      <div>
        <div className="loginForm form-container" onSubmit={handleSubmit}>
          <form autoComplete="off">
            <label>Email</label>
            <input type="text" name="email" value={credentials.email} onChange={handleChange} required />
            <label>Password</label>
            <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
            <button className="btn btn-primary" type="submit">LOG IN</button>
          </form>
        </div>
        <p className="error-message">&nbsp;{error}</p>
      </div>
      
    </div>
  );
}