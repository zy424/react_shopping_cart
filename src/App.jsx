import React from 'react'
import Layout from 'app/layouts/Layout'
import ProductAction from "app/redux/actions/ProductAction";
import {action} from "app/redux/Store";

 class App extends React.Component{
   componentDidMount () {
     action(ProductAction.PRODUCT_GET,undefined)
   }
  render(){
    return(
      <div>
        <Layout/>
      </div>
    )
  }
}

export default App