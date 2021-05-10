import { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import MyPets from '../MyPets/MyPets';
// import PetCard from '../../components/PetCard/PetCard'
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';
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
              <NewOrderPage />
            </Route>
            <Route path="/mypets">
              <MyPets />
            </Route>
            <Route path="/login">
              <AuthPage setUser={setUser} />
            </Route>

            {/* Route below ALWAYS GOES LAST */}
            <Route path="/">
              <OrderHistoryPage />
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
              <MyPets />
            </Route>
            <Route path="/login">
              <AuthPage setUser={setUser} />
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
