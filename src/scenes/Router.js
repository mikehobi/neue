import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Loadable from 'react-loadable';

import ProductDetail from './ProductDetail';

import GlobalNavigation from '../shared/GlobalNavigation';

import { View, Col } from 'constelation-view';

class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Col height="100%">

          {/* Global Nav Here... */}
          <GlobalNavigation />

          {/* Routes */}
          <View flex={1}>
            {/* Home / Possibly TOC */}
            <Route path="/" exact component={Home}/>

            {/* Gridwalls possibly change syntax */}
            <Route path="/shop" exact component={Page}/>
            <Route path="/shop/:gender" component={Page}/>

            {/* Product Pages */}
            <Route path="/product" exact component={LoadableComponent}/>
            <Route path="/product/:product" exact component={LoadableComponent}/>
            <Route path="/product/:product/detail" component={LoadableComponent}/>

            {/* Product Pages */}
            <Route path='/bag' component={Page} />

            {/* Profile */}
            <Route path='/profile' component={Page} />
          </View>

          {/* Footer */}
          <View tag='footer' height={100} style={{backgroundColor: '#111', color: 'white' }}>
            Footer
          </View>

        </Col>
      </BrowserRouter>
    );
  }
}

class Loading extends React.Component {
  render() {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
}

const LoadableComponent = Loadable({
  loader: () => import('./ProductDetail'),
  loading: Loading,
})

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <Link to={`/profile`}>go to page</Link>
      </div>
    );
  }
}

const Page = ({ match }) => (
  <React.Fragment>
    <h1>Page: {match.url}</h1>
    <Link to={`${match.url}/inbox`}>go to inbox</Link>
    <Link to={`${match.url}/orders`}>go to orders</Link>

    <Route path={`${match.url}/inbox`} render={() => {
        return (
          <div>
            hi
          </div>
        )
      }}
    />

    <Route path={`${match.url}/orders`} render={() => {
        return (
          <div>
            orders
          </div>
        )
      }}
    />
  </React.Fragment>
)

export default Router;
