import React from 'react';
import Signup from '../components/login&signup/Signup';
import Login from '../components/login&signup/Login';
import { AuthProvider } from '../contexts/AuthContext';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import ForgotPassword from '../components/login&signup/ForgotPassword';
import { useGlobalContext } from '../contexts/GlobalContext';
import Header from './header & footer/Header';
import SingleUnit from './pages-components/SingleUnit';
import Fullpage from './FullPage';
import LoadingPage from './pages-components/LoadingPage';
import 'react-toastify/dist/ReactToastify.css';
// import Footer from './header & footer/Footer';

const App = () => {
  const { isLoading } = useGlobalContext();
  return (
    <>
      {isLoading && <LoadingPage />}
      <BrowserRouter>
        <AuthProvider>
          <Header />
          <Switch>
            <PrivateRoute exact path='/' component={Fullpage} />
            <Route path='/signup' component={Signup} />
            <Route path='/login' component={Login} />
            <Route path='/forgot-password' component={ForgotPassword} />
            <Route path='/unit/:id' component={SingleUnit} />
          </Switch>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
