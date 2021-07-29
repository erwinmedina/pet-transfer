import { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import MyPetsPage from '../MyPetsPage/MyPetsPage';
import AvailablePetsPage from '../AvailablePetsPage/AvailablePetsPage';
import HomePage from '../HomePage/HomePage';
import NavBar from '../../components/NavBar/NavBar';
import AboutPage from "../AboutPage/AboutPage"
import AvailablePetsDetailsPage from '../AvailablePetsDetailsPage/AvailablePetsDetailsPage';
import './App.css';

export default function App() {
  const [pet, setPet] = useState();
  const [user, setUser] = useState(getUser());
  const [location, setLocation] = useState({});

  useEffect(function() {
    function getLocation() {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLocation({
          latitude: position.coords.latitude, 
          longitude: position.coords.longitude
        })
      })
    }
    getLocation();
  }, []);

  return (
    <main className="App">
      { user ? 
        <>
          <NavBar user={user} setUser={setUser} />
          <Switch>
            <Route path="/availablepetsdetail">
              <AvailablePetsDetailsPage pet={pet} user={user}/>
            </Route>
            <Route path="/availablepets">
              <AvailablePetsPage setPet={setPet} user={user}/>
            </Route>
            <Route path="/mypets">
              <MyPetsPage user={user}/>
            </Route>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/">
              <HomePage user={user}/>
            </Route>
            
            <Redirect to="/" />
          </Switch>
        </>
        :
        <>
          <NavBar user={user} setUser={setUser} />
          <Switch>
            <Route path="/availablepets/:petId">
              <AvailablePetsDetailsPage user={user}/>
            </Route>
            <Route path="/availablepets">
              <AvailablePetsPage />
            </Route>
            <Route path="/mypets">
              <MyPetsPage user={user} />
            </Route>
            <Route path="/login">
              <AuthPage setUser={setUser} location={location} />
            </Route>
            <Route path="/about">
              <AboutPage />
            </Route>

            {/* Route below ALWAYS GOES LAST */}
            <Route path="/">
              <HomePage />
            </Route>
            <Redirect to="/" />
          </Switch>
        </>
      }
    </main>
  );
}
