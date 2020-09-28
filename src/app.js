import React from 'react';
import { Switch, BrowserRouter, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/pages/Home';
import Gallery from './components/pages/Gallery';
import Hygiene from './components/pages/Hygiene';
import Staff from './components/pages/Staff';
import AboutUs from './components/pages/AboutUs';
export default function App() {
    return (
        <BrowserRouter>
            <NavBar/>
            <React.Suspense fallback={<div>Loading</div>}>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/gallery' component={Gallery} />
                    <Route path='/hygiene' component={Hygiene} />
                    <Route path='/staff' component={Staff} />
                    <Route path='/about-us' component={AboutUs} />
                    <Route component={()=><h1>404</h1>}/>
                </Switch>
            </React.Suspense>
        </BrowserRouter>
    )
}