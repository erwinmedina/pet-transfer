import { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import MyPetsPage from '../MyPetsPage/MyPetsPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';
import AboutPage from "../AboutPage/AboutPage"
import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());
  
  return (
    <main className="App">
      { user ? 
        <>
          <NavBar user={user} setUser={setUser} />
          <Switch>
            <Route path="/availablepets">
              <NewOrderPage user={user}/>
            </Route>
            <Route path="/mypets">
              <MyPetsPage user={user}/>
            </Route>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/">
              <OrderHistoryPage user={user}/>
            </Route>
            
            <Redirect to="/" />
          </Switch>
        </>
        :
        <>
          <NavBar user={user} setUser={setUser} />
          <Switch>
            <Route path="/availablepets">
              <NewOrderPage />
            </Route>
            <Route path="/mypets">
              <MyPetsPage user={user} />
            </Route>
            <Route path="/login">
              <AuthPage setUser={setUser} />
            </Route>
            <Route path="/about">
              <AboutPage />
            </Route>

            {/* Route below ALWAYS GOES LAST */}
            <Route path="/">
              <OrderHistoryPage />
            </Route>
            <Redirect to="/" />
          </Switch>
        </>
      }
    </main>
  );
}
