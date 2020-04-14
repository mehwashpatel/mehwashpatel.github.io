import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Home} from './Home';
import {About} from './About';
import {Portfolio} from './Portfolio';
import {Blog} from './Blog';
import {Contact} from './Contact';
import {NoMatch} from './NoMatch';
import {Layout} from './components/Layout';
import {NavigationBar} from './components/NavigationBar';
import {Jumbotron} from './components/Jumbotron';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { withRouter } from "react-router";

 
library.add(fab, faCheckSquare, faCoffee)

const HeaderWithRouter = withRouter(NavigationBar);

function App() {
  return (
    <React.Fragment>
      <Jumbotron />
      <Layout>
        <Router>
          <HeaderWithRouter />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path={process.env.PUBLIC_URL + '/about'} component={About} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/blog" component={Blog} />
            <Route path="/contact" component={Contact} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </Layout>
    </React.Fragment>
  );
}

export default App;

