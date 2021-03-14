import React, { Component, Fragment }               from 'react';
import { BrowserRouter as Router,  Switch,  Route } from 'react-router-dom';
import { createBrowserHistory }           from 'history';
import Nav                           from './components/navBar.';
import Home                               from './components/home';
import Cart                               from './components/cartList';

const history = createBrowserHistory();



class App extends Component {
  state = {

  };


  render(){



    return (

      <Router history={history}>
        <Fragment>

          <Nav/>


          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/About" component={Cart} />

            {/* catch page for unmatched pages */}
            <Route component={Home} />
          </Switch>


        </Fragment>
      </Router>

    );
  }
}

export default App;