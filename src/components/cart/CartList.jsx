import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Typography} from '@material-ui/core'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import {Table,TableBody,IconButton,TableCell,TableHead, TableRow,} from '@material-ui/core'

import CartItem from './CartItem'

class CartList extends Component{

  render(){
    // const {products} = this.props
    // const display = products.length === 0 ? 'block' : 'none'
    const{ count, onAddClick, onRemoveClick} = this.props
    return(
      <div >
        <Typography variant="h6" component = 'h6'><ShoppingCartIcon color='secondary'/>&nbsp;Shopping Cart</Typography>
        <div>
          <Table>
            <TableHead >
              <TableRow>
                <TableCell>PRODUCT</TableCell>
                <TableCell>NAME</TableCell>
                <TableCell>SIZE</TableCell>
                <TableCell>PRICE</TableCell>
                <TableCell>QUANTITY</TableCell>
                <TableCell>TOTAL</TableCell>
                <TableCell>REMOVE</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {
                <CartItem
                  onAddClick = {onAddClick}
                  onRemoveClick = {onRemoveClick}
                  count = {count}
                />
              }
            </TableBody>
          </Table>
        </div>
      </div>
    )
  }
}
CartList.propTypes = {
  count: PropTypes.number.isRequired,
  onAddClick: PropTypes.func.isRequired,
  onRemoveClick: PropTypes.func.isRequired,
}
export default CartList