import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import {connect} from 'react-redux'
import classNames from 'classnames'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
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
import UserAction from 'app/redux/actions/UserAction'


const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
  },
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
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
})

class Main extends React.Component {

  render() {
    const {users, searchName, classes, isLoading} = this.props
    if (isLoading) {
      return (
        <React.Fragment>
          <CssBaseline/>
          <main>
            <div className={classNames(classes.layout, classes.cardGrid)}>
              {/* End hero unit */}
              <Grid container spacing={40}>
                <h2>Loading...</h2>
              </Grid>
            </div>
          </main>
          {/* Footer */}
          <footer className={classes.footer}>
            <Typography variant="h6" align="center" gutterBottom>
              Search Github Users
            </Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
              Copyright ©2018 All rights reserved |Made with React by Yi Zhou
            </Typography>
          </footer>
          {/* End footer */}
        </React.Fragment>)
    } else {

      return (
        <React.Fragment>
          <CssBaseline/>
          <main>
            <div className={classNames(classes.layout, classes.cardGrid)}>
              {/* End hero unit */}
              <Grid container spacing={40}>
                {users.map((user, index) => (
                  <Grid item key={index} sm={6} md={4} lg={3}>
                    <Card className={classes.card}>
                      <CardActionArea href={user.getAttribute('url')}>
                        <CardMedia
                          className={classes.cardMedia}
                          image={user.getAttribute('avatarUrl')}
                          title="User avatar"
                        />
                        <CardContent className={classes.cardContent}>
                          <Typography gutterBottom variant="h5" component="h2">
                            {user.getAttribute('name')}
                          </Typography>
                          <Typography component="p">
                            Score: {user.getAttribute('score')}
                          </Typography>
                          <Typography component="p">
                            Click to find more about me.
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <IconButton aria-label="Add to favorites">
                          <FavoriteIcon color="secondary"/>
                        </IconButton>
                        <IconButton aria-label="Share">
                          <ShareIcon color="secondary"/>
                        </IconButton>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </div>
          </main>
          {/* Footer */}
          <footer className={classes.footer}>
            <Typography variant="h6" align="center" gutterBottom>
              Search Github Users
            </Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
              Copyright ©2018 All rights reserved |Made with React by Yi Zhou
            </Typography>
          </footer>
          {/* End footer */}
        </React.Fragment>
      )
    }
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
  users: PropTypes.array.isRequired,
  searchName: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
}
export default withStyles(styles)(Main)