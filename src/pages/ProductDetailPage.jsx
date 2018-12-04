import React from 'react'
import {Grid,
  Typography,
  Paper} from '@material-ui/core'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  expanded: {
    color: '#D73965',
  },
})


class ProductDetailPage extends React.Component {
  render(){
    const {classes} = this.props
    return (
      <Grid container spacing={32}>
        <Grid item xs={12} md={6}>

        </Grid>
        <Grid item xs={12} md={6}>
            <div>
              <h1> Name </h1>
              <h3> $129</h3>
            </div>
            <div className={classes.root}>
              <ExpansionPanel>
                <ExpansionPanelSummary
                  classes={{
                    expanded: classes.expanded,
                  }}
                  expandIcon={<ExpandMoreIcon />}
                >
                  <div>Expansion Panel 1</div>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget.
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={classes.heading}>Expansion Panel 2</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget.
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel >
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={classes.heading}>Disabled Expansion Panel</Typography>
                </ExpansionPanelSummary>
              </ExpansionPanel>
            </div>
        </Grid>
      </Grid>
    )
  }
}

ProductDetailPage.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ProductDetailPage)