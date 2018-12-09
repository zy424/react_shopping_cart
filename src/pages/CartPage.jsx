import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {action} from 'app/redux/Store'
import {Card,  withStyles, CardContent,} from '@material-ui/core'

import CartAction from 'app/redux/actions/CartAction'
import CartList from 'app/components/cart/CartList'


const styles= theme =>({
  avatar: {
    backgroundColor: "#c73461",
  },
  header: {
    backgroundColor:"#DBD5D5",
  },
  background: {
    backgroundColor:"#F5f5f5",
  }
})
class CartPage extends Component{
  render(){
    const { classes,count} = this.props
    return(
      <Card>
        <CardContent className={classes.background}>
          <CartList
            count = {count}
            onAddClick = {this.onAddClick}
            onRemoveClick = {this.onRemoveClick}
          />
        </CardContent>
      </Card>
    )
  }
  onAddClick = (e) => {
    action(CartAction.ADD_PRODUCT, this.props.count)
  }
  onRemoveClick = (e) => {
    action(CartAction.REMOVE_PRODUCT, this.props.count)
  }
}

CartPage.propTypes = {
  classes: PropTypes.object.isRequired,
  count: PropTypes.number.isRequired,
}

export default connect(store => ({
  count: store.cart.count,
}))(withStyles(styles)(CartPage))