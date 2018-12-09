import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardActionArea from '@material-ui/core/CardActionArea'
import IconButton from '@material-ui/core/IconButton'
import CardMedia from '@material-ui/core/CardMedia'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import {withStyles} from '@material-ui/core/styles'
import { connect } from 'react-redux'
import {history} from "app/layouts/Routes"


const styles = theme => ({

  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '0'
  },
  cardMedia: {
    paddingTop: '100%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  cart: {
    marginLeft: 'auto',
  }
})


class ProductPage extends React.Component {

  render() {
    const { classes,products} = this.props
    console.log(products)
      return (
        <React.Fragment>
          <main>
            <div className={classNames(classes.layout, classes.cardGrid)}>
              <Grid container spacing={40}>
                {products.map((product, index) => (
                  <Grid item key={index} sm={6} md={4} lg={3}>
                    <Card className={classes.card}>
                      <CardActionArea onClick={()=> history.push(`/product-detail/${index}`)}>
                        <CardMedia
                          className={classes.cardMedia}
                          image={product.getAttribute('images[0]')}
                          title="User avatar"
                        />
                      </CardActionArea>
                      <CardActions>
                      <Typography>
                        {product.getAttribute('name')}: ${product.getAttribute('price')}
                      </Typography>
                        <IconButton
                          aria-label="add to cart"
                          className={classes.cart}
                          onClick={()=> history.push('/shopping-cart')}
                        >
                          <ShoppingCartIcon color="secondary"/>
                        </IconButton>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </div>
          </main>
        </React.Fragment>
      )
    }
}

ProductPage.propTypes = {
  classes: PropTypes.object.isRequired,
  products: PropTypes.array.isRequired,
}
export default connect(store => ({
  products: store.product.products,
}))(withStyles(styles)(ProductPage))