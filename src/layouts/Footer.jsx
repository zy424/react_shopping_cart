import React from 'react'
import PropTypes from 'prop-types'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import {withStyles} from '@material-ui/core/styles'



const styles = theme => ({

  footer: {
    backgroundColor: "#F5F5F5",
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
})

class Footer extends React.Component {

  render() {
    const {classes} = this.props
      return (
        <React.Fragment>
          <CssBaseline/>
            <footer className={classes.footer}>
              <Typography variant="h6" align="center" gutterBottom>
                Yi-shopping Store
              </Typography>
              <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                Copyright ©2018 All rights reserved | Made with React by Yi Zhou
              </Typography>
            </footer>
        </React.Fragment>)
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,

}
export default withStyles(styles)(Footer)