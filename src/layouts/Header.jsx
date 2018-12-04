import React from 'react';
import PropTypes from 'prop-types'
import classNames from 'classnames'
import {connect} from 'react-redux'
import {NavLink, Route, Switch, withRouter} from 'react-router-dom'
import {createMuiTheme, MuiThemeProvider, withStyles} from '@material-ui/core';
import {
  AppBar,
  Badge,
  CssBaseline,
  Divider,
  Drawer,
  Hidden,
  IconButton,
  Toolbar,
  Typography
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import {isWidthDown} from '@material-ui/core/withWidth'

import Nav from "app/layouts/Nav"


const drawerWidth = 240
const styles = theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9,
    },
  },
})

class Header extends React.Component {
  state = {
    open: true,
  };

  handleDrawerOpen = () => {
    this.setState({open: true});
  };

  handleDrawerClose = () => {
    this.setState({open: false});
  }

  isSmartphone = (width) => {
    isWidthDown('xs', width)
  }


  render() {
    const {classes} = this.props
    return (
      <div className={classes.root}>
        <CssBaseline/>
        <AppBar
          position="absolute"
          className={classNames(classes.appBar, this.state.open && classes.appBarShift)}
        >
          <Toolbar disableGutters={!this.state.open} className={classes.toolbar}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(
                classes.menuButton,
                this.state.open && classes.menuButtonHidden,
              )}
            >
              <MenuIcon/>
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap={!this.isSmartphone}
              className={classes.title}
            >
              Welcome to Yi-shopping
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={3} color="secondary">
                <ShoppingCartIcon/>
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Hidden mdUp>
          <Drawer
            variant="temporary"
            open={this.state.open}
            classes={{
              paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
            }}
            onClose={this.handleDrawerClose}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <div className={classes.toolbarIcon}>
              <IconButton onClick={this.handleDrawerClose} color='primary'>
                <ChevronLeftIcon/>
              </IconButton>
            </div>
            <Divider/>
              <Nav/>
            <Divider/>
          </Drawer>
        </Hidden>
        <Hidden smDown>
          <Drawer
            variant="permanent"
            classes={{
              paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
            }}
            open
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <div className={classes.toolbarIcon}>
              <IconButton onClick={this.handleDrawerClose} color='primary'>
                <ChevronLeftIcon/>
              </IconButton>
            </div>
            <Divider/>
              <Nav/>
            <Divider/>
          </Drawer>
        </Hidden>
      </div>

    )
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
}
export default withRouter(withStyles(styles)(Header))