import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import "./AuthPage.css";

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main className="loginPageForm">
      {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
      <button className="buttonChanger" onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'Sign Up': 'Log In'}</button>
    </main>
  );
}