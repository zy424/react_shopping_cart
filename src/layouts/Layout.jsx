import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import {connect} from 'react-redux'
import { withRouter} from 'react-router-dom'
import {createMuiTheme, MuiThemeProvider, withStyles} from '@material-ui/core'
import {CssBaseline} from '@material-ui/core'
import teal from "@material-ui/core/colors/teal"
import pink from "@material-ui/core/colors/pink"
import Header from "app/layouts/Header"
import Main from "app/layouts/Main"
import Footer from "app/layouts/Footer"


const drawerWidth = 240
const styles = theme => ({
 root: {
    display: 'flex',
  },

})
const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: teal,
    secondary: {
      light: pink[400],
      main: pink[500],
      dark: pink[600],
      contrastText: '#fff',
    },
  },
})

class Layout extends React.Component {

  render() {
    const {classes} = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
          <CssBaseline/>
          <Header />
          <Main/>

        </div>
      </MuiThemeProvider>
    )
  }
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
}
export default withStyles(styles)(Layout)