import React from 'react'
import PropTypes from 'prop-types'
import { withRouter} from 'react-router-dom'
import { withStyles} from '@material-ui/core'

import Routes from 'app/layouts/Routes'



const drawerWidth = 240
const styles = theme => ({

  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: "100vh",
    overflow: 'auto',
  },

  h5: {
    marginBottom: theme.spacing.unit * 2,
  },
})

class Main extends React.Component {

  render() {
    const {classes} = this.props;
    return (
      <main className={classes.content}>
        <div className={classes.appBarSpacer}/>
        <div>
          <Routes/>
        </div>
      </main>
    )
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
}
export default withStyles(styles)(Main)