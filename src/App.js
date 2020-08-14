import React, {useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Checkout from './pages/Checkout/Checkout';
import Login from './pages/Login/Login';
import {useStateValue} from './StateProvider';
import {auth} from './firebase';

export default function App() {
    const [{basket}, dispatch] = useStateValue();
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(authUser => {
            if (authUser) {
                dispatch({
                    type: 'SET_USER',
                    user: authUser
                });
            } else {
                dispatch({
                    type: 'SET_USER',
                    user: null
                });
            }
        });
        return () => {
            unsubscribe();
        };
    }, [dispatch]);
    return (
        <Router>
            <div className='app'>
                <Switch>
                    <Route path='/checkout'>
                        <Header />
                        <Checkout />
                    </Route>
                    <Route path='/login'>
                        <Login />
                    </Route>
                    <Route path='/'>
                        <Header />
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
