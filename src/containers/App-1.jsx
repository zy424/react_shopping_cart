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
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import HomeIcon from '@material-ui/icons/Home'
import AssignmentIcon from '@material-ui/icons/Assignment'
import teal from "@material-ui/core/colors/teal"
import pink from "@material-ui/core/colors/pink"
import {isWidthDown} from '@material-ui/core/withWidth';

import HomePage from "app/pages/HomePage"
import ProductPage from "app/pages/ProductPage"
import CartPage from "app/pages/CartPage"


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
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: '100vh',
    overflow: 'auto',
  },
  chartContainer: {
    marginLeft: -22,
  },
  tableContainer: {
    height: 320,
  },
  h5: {
    marginBottom: theme.spacing.unit * 2,
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


class App1 extends React.Component {
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
    const {classes} = this.props;
    return (
      <MuiThemeProvider theme={theme}>
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
              <List>
                <NavLink to='/'>
                  <ListItem button>
                    <ListItemIcon>
                      <HomeIcon color='primary'/>
                    </ListItemIcon>
                    <ListItemText primary="Home"/>
                  </ListItem>
                </NavLink>
                <NavLink to='/comment'>
                  <ListItem button>
                    <ListItemIcon>
                      <AssignmentIcon color='primary'/>
                    </ListItemIcon>
                    <ListItemText primary="Comments"/>
                  </ListItem>
                </NavLink>
              </List>
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
              <List>
                <NavLink to='/'>
                  <ListItem button>
                    <ListItemIcon>
                      <HomeIcon color='primary'/>
                    </ListItemIcon>
                    <ListItemText primary="Home"/>
                  </ListItem>
                </NavLink>
                <NavLink to='/products'>
                  <ListItem button>
                    <ListItemIcon>
                      <AssignmentIcon color='primary'/>
                    </ListItemIcon>
                    <ListItemText primary="Products"/>
                  </ListItem>
                </NavLink>
                <NavLink to='/shopping-cart'>
                  <ListItem button>
                    <ListItemIcon>
                      <ShoppingCartIcon color='primary'/>
                    </ListItemIcon>
                    <ListItemText primary="Shopping Cart"/>
                  </ListItem>
                </NavLink>
              </List>
              <Divider/>
            </Drawer>
          </Hidden>
          <main className={classes.content}>
            <div className={classes.appBarSpacer}/>
            <div>
              <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route exact path='/products' component={ProductPage}/>
                <Route exact path='/shopping-cart' component={CartPage}/>
                <Route render={(props) => {
                  return (<h3>Page Not Found</h3>)
                }}/>
              </Switch>
            </div>
          </main>
        </div>
      </MuiThemeProvider>
    )
  }
}

App1.propTypes = {
  classes: PropTypes.object.isRequired,
}
export default withRouter(withStyles(styles)(App1))