import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import "./AuthPage.css";

export default function AuthPage({ setUser, location}) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main className="loginPageForm">
      <div className="loginPageTitle">
        <h2 className="homepage-title">{showLogin ? "Log In" : "Sign Up"}</h2>
      </div>
      {showLogin ? <LoginForm setUser={setUser} location={location} /> : <SignUpForm setUser={setUser} location={location}/>}
      {!showLogin ? "Already have an account?" : "Don't have an account?"}
      <button className="btn btn-primary buttonChanger" onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'Sign Up': 'Log In'}</button>
    </main>
  );
}