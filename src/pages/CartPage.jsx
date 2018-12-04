import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Card,  withStyles, CardHeader, CardContent, Avatar, IconButton} from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert'

import CartList from 'app/components/CartList'


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
    const { classes} = this.props
    return(
      <Card>
        <CardContent className={classes.background}>
          <CartList/>
        </CardContent>
      </Card>
    )
  }
}

CartPage.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(CartPage)