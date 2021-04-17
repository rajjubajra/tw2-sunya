import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MainNav from '../components/Nav/MainNav';
import Home from './Home';
import About from './About';
import Tracks from './Tracks';
import Track from './Track';
import Contact from './Contact';




function Router() {
  
  return (
    <BrowserRouter>
        <div className="fixed top-0 w-full z-40">
          <MainNav />
        </div>
          
        
        <Switch>
          <Route exact path="/" component={Home} />
          <Route  path="/about" component={About} />
          <Route  path="/tracks" component={Tracks} />
          <Route  path="/track-details/:uuid" component={Track} />
          <Route path='/contact' component={Contact} />
        </Switch>
        
    </BrowserRouter>
  )
}

export default Router
