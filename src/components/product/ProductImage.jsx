import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import Grid from '@material-ui/core/Grid'
import {withStyles} from '@material-ui/core/styles'


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

  state = {
    img: this.props.product.images[0],
  }
  handleImage = (image) => {
    let {img} = this.state
    this.setState({img: image})
  }

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
                    image={this.state.img}
                    title={product.name}
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
                      title={product.name}
                      onClick = {() => this.handleImage(image)}
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