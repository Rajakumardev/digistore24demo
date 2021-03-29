import './App.css';
import {
  BrowserRouter as Router, Link, Route, Switch
} from 'react-router-dom';
import Listing from './Pages/Listing/Listing';
import Payment from './Pages/Payment/Payment';
import Success from './Pages/Success/Success';

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/listing">Products</Link>
      </div>
      <Switch>
        <Route exact path='/'>
          <Listing />
        </Route>
        <Route exact path='/listing'>
          <Listing />
        </Route>
        <Route exact path='/payemnt/:pid/:fmid'>
          <Payment />
        </Route>
        <Route exact path='/success'>
          <Success />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
