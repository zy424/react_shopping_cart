import React from 'react'
import createBrowserHistory from 'history/createBrowserHistory'
import HomePage from "app/pages/HomePage"
import CartPage from "app/pages/CartPage"
import ProductPage from "app/pages/ProductPage"
import ProductDetailPage from "app/pages/ProductDetailPage"
import {NavLink, Route, Switch, withRouter} from 'react-router-dom'

// Create a history
export const history = createBrowserHistory()


class Routes extends React.Component{
    render(){
      return(
        <div>
          <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/products' component={ProductPage}/>
            <Route exact path='/product-detail' component={ProductDetailPage}/>
            <Route exact path='/shopping-cart' component={CartPage}/>
            <Route render={(props) => {
              return (<h3>Page Not Found</h3>)
            }}/>
          </Switch>
        </div>
      )
    }
  }
export default Routes
