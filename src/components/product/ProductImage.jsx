import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardActionArea from '@material-ui/core/CardActionArea'
import IconButton from '@material-ui/core/IconButton'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import {withStyles} from '@material-ui/core/styles'

import slider_1 from 'app/assets/images/img_bg_1.jpg'
import slider_2 from 'app/assets/images/img_bg_2.jpg'
import slider_3 from 'app/assets/images/img_bg_3.jpg'
import {history} from "app/layouts/Routes";


const styles = theme => ({

  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 4,
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


class ProductImage extends React.Component {
  render() {
    const {classes,product} = this.props
    const images = product.images
    return (
      <React.Fragment>
        <div className={classNames(classes.layout, classes.cardGrid)}>
          <Grid container spacing={16}>
            <Grid item  sm={12} md={12} lg={12}>
              <Card className={classes.card}>
                <CardActionArea >
                  <CardMedia
                    className={classes.cardMedia}
                    image={images[0]}
                    title="User avatar"
                  />
                </CardActionArea>
              </Card>
            </Grid>
            {images.map((image, index) => (
              <Grid item key={index} sm={12} md={6} lg={4}>
                <Card className={classes.card}>
                  <CardActionArea >
                    <CardMedia
                      className={classes.cardMedia}
                      image={image}
                      title="User avatar"
                    />
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
            </Grid>
          </div>
      </React.Fragment>
    )
  }
}

ProductImage.propTypes = {
  classes: PropTypes.object.isRequired,
  product: PropTypes.object.isRequired,
}
export default withStyles(styles)(ProductImage)