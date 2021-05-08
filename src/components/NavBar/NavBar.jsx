import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
  <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">Pet Transfer</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <Link className="nav-link" to="/orders/new">Available Pets</Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link" to="/orders/new">My Pets</Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link" to="/orders/new">Petsitting  </Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link" to="/orders/new">About / Charities</Link>
          </li>
          
        </ul>
        {/* <span>Welcome, {user.name}</span> */}
        <Link to="" onClick={handleLogOut}>Log Out</Link>
      </div>
    </nav>
  </div>
  );
}