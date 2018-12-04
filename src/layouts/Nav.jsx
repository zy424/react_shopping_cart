import React from 'react'
import {NavLink, withRouter} from 'react-router-dom'
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core'
import {history} from "app/layouts/Routes"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import HomeIcon from '@material-ui/icons/Home'
import AssignmentIcon from '@material-ui/icons/Assignment'
import LayersIcon from '@material-ui/icons/Layers'


class Nav extends React.Component {
  render() {
    return (
      <List>
          <ListItem button onClick={()=> history.push('/')}>
            <ListItemIcon>
              <HomeIcon color='primary'/>
            </ListItemIcon>
            <ListItemText primary="Home"/>
          </ListItem>

          <ListItem button onClick={()=> history.push('/products')}>
            <ListItemIcon>
              <AssignmentIcon color='primary'/>
            </ListItemIcon>
            <ListItemText primary="Products"/>
          </ListItem>


          <ListItem button onClick={()=> history.push('/product-detail')}>
            <ListItemIcon>
              <LayersIcon color='primary'/>
            </ListItemIcon>
            <ListItemText primary="Product Detail"/>
          </ListItem>


          <ListItem button  onClick={()=> history.push('/shopping-cart')}>
            <ListItemIcon>
              <ShoppingCartIcon color='primary'/>
            </ListItemIcon>
            <ListItemText primary="Shopping Cart"/>
          </ListItem>

      </List>
    )
  }
}

export default withRouter(Nav)