import React from 'react'
import {
  Grid,
  Typography,
 } from '@material-ui/core'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import ProductImage from 'app/components/product/ProductImage'
import ProductDetail from 'app/components/product/ProductDetail'
import {connect} from "react-redux";

const styles = theme => ({
  container: {
    marginTop:theme.spacing.unit * 3,
  },
})

class ProductDetailPage extends React.Component {
  render(){
    const params = this.props.match.params
    const {classes, products} = this.props
    const product = products[params.index]
    return (
      <Grid container spacing={32}  className={classes.container}>
        <Grid item xs={12} md={6}>
          <ProductImage product = {product}/>
        </Grid>
        <Grid item xs={12} md={6}>
          <div>
            <Typography component="h2" className={classes.font} variant="h3" gutterBottom>
              {product.name}
            </Typography>
            <Typography variant="h5" gutterBottom className={classes.price}>
              ${product.price}
            </Typography>
            <ProductDetail product = {product}/>
          </div>
        </Grid>
      </Grid>
    )
  }
}

ProductDetailPage.propTypes = {
  classes: PropTypes.object.isRequired,
  products: PropTypes.array.isRequired,
}
export default connect(store => ({
  products: store.product.products,
}))(withStyles(styles)(ProductDetailPage))