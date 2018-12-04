import React, {Component} from 'react'
import PropTypes from 'prop-types'
import product from 'app/assets/images/product.jpg'
import {withStyles, TableRow,TableCell,IconButton, Avatar,TextField} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle'
import AddCircleIcon from '@material-ui/icons/AddCircle'


const styles = theme => ({
  avatar: {
    borderRadius: 3,
    marginBottom: 5,
    marginTop:5,
    width: 100,
    height: 100,
  },
  input: {
    width: 30,
    height: 40,
    margin:0,
  }
})

class CartItem extends Component{
  handleClick = ()=>{
    const {} = this.props
    if(window.confirm(`Are you sure to delete this product?`)) {
    }
  }
  render(){
    const {classes} = this.props
    return(
      <TableRow>
        <TableCell >
          <Avatar alt="photo" src={product} className={classes.avatar}/>
        </TableCell>
        <TableCell>name</TableCell>
        <TableCell>S</TableCell>
        <TableCell>$123</TableCell>
        <TableCell>
          <IconButton aria-label="remove" >
            <RemoveCircleIcon color='secondary'/>
          </IconButton>
          <TextField
            defaultValue="1"
            className={classes.input}
          />
          <IconButton aria-label="add">
            <AddCircleIcon color='secondary'/>
          </IconButton>
        </TableCell>
        <TableCell>$123</TableCell>
        <TableCell>
          <IconButton aria-label="Delete" onClick={this.handleClick}>
            <DeleteIcon color='secondary'/>
          </IconButton>
        </TableCell>
      </TableRow>
    )
  }}

CartItem.propTypes = {
  classes: PropTypes.object.isRequired,
}
export default withStyles(styles)(CartItem)