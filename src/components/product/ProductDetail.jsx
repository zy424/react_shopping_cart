import React from 'react'
import {
  Typography,
  Divider,
  TextField,
  MenuItem,
  Fab,} from '@material-ui/core'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'

import ProductImage from 'app/components/product/ProductImage'

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: 30,
  },
  container: {
    marginTop:theme.spacing.unit * 3,
  },
  panel:{
    boxShadow: 'none',
    border: 0,
    backgroundColor:'#FAFAFA',
  },
  form: {
    marginTop:40,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  panelSummary: {
    padding: 0,
  },
  panelDetails: {
    paddingLeft: 0,
  },
  expanded: {
    color: '#D73965',
  },

  font: {
    fontWeight: '500',
  },
  price: {
    color: '#444444',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 262,
    paddingTop: 15,
  },
  menu: {
    width: 200,
  },
  button: {
    marginTop:30,
    textAlign: 'right',
  },
  fab: {
    margin: theme.spacing.unit,
    paddingLeft:30,
    paddingRight:30,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
})
const colors = [
  {
    value: 'Red',
    label: 'Red',
  },
  {
    value: 'Green',
    label: 'Green',
  },
  {
    value: 'Yellow',
    label: 'Yellow',
  },
  {
    value: 'Blue',
    label: 'Blue',
  },
]

const sizes = [
  {
    value: 'S',
    label: 'S',
  },
  {
    value: 'M',
    label: 'M',
  },
  {
    value: 'L',
    label: 'L',
  },
  {
    value: 'XL',
    label: 'XL',
  },
]


class ProductDetail extends React.Component {
  state = {
    color: 'Red',
    size: 'S',
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
  render(){
    const {classes, product} = this.props
    return (
      <React.Fragment>
        <div className={classes.root}>
          <ExpansionPanel className={classes.panel}>
            <ExpansionPanelSummary
              classes={{
                expanded: classes.expanded,
              }}
              expandIcon={<ExpandMoreIcon />}
              className={classes.panelSummary}
            >
              <div>Description</div>
            </ExpansionPanelSummary>
            <Divider/>
            <ExpansionPanelDetails className={classes.panelDetails}>
              <Typography>
                {product.description}
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel className={classes.panel}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              classes={{
                expanded: classes.expanded,
              }}
              className={classes.panelSummary}
            >
              <div>Designer Information</div>
            </ExpansionPanelSummary>
            <Divider/>
            <ExpansionPanelDetails className={classes.panelDetails}>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                sit amet blandit leo lobortis eget.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel className={classes.panel}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              classes={{
                expanded: classes.expanded,
              }}
              className={classes.panelSummary}
            >
              <div>Details and care</div>
            </ExpansionPanelSummary>
            <Divider/>
            <ExpansionPanelDetails className={classes.panelDetails}>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                sit amet blandit leo lobortis eget.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <Divider/>
        </div>
        <form  className={classes.form}>
          <TextField
            select
            label="Select color"
            className={classes.textField}
            value={this.state.color}
            onChange={this.handleChange('color')}
            SelectProps={{
              MenuProps: {
                className: classes.menu,
              },
            }}
            margin="normal"
            color="secondary"
          >
            {colors.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            label="Select Size"
            className={classes.textField}
            value={this.state.size}
            onChange={this.handleChange('size')}
            SelectProps={{
              native: true,
              MenuProps: {
                className: classes.menu,
              },
            }}
            margin="normal"
          >
            {sizes.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
        </form>
        <div className={classes.button}>
          <Fab variant="extended" color= "secondary" aria-label="cart" className={classes.fab}>
            Add to Cart &nbsp;&nbsp;<ShoppingCartIcon  />
          </Fab>
        </div>
      </React.Fragment>
    )
  }
}

ProductDetail.propTypes = {
  classes: PropTypes.object.isRequired,
  product: PropTypes.object.isRequired,
}

export default withStyles(styles)(ProductDetail)