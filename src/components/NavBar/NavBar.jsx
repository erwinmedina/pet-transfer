import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import "./NavBar.css"

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
  <div className="theNavBar">
    <nav className="navbar navbar-expand-lg navbar-light">
      <div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link" to="/availablepets">Available Pets</Link>
          </li>
          { user ? 
          <li class="nav-item">
            <Link className="nav-link" to="/mypets">My Pets</Link>
          </li>
          :
          ''}
          <li class="nav-item">
            <Link className="nav-link" to="/orders/new">Petsitting</Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          { user ? 
            <li class="nav-item">
              <Link className="nav-link" to="/login" onClick={handleLogOut}>Sign Out</Link>
            </li>
          : 
            <li class="nav-item">
              <Link className="nav-link" to="/login">Sign In</Link>
            </li>
          }
        </ul>
      </div>
    </nav>
  </div>
  );
}