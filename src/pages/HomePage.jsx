import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import SwipeableViews from 'react-swipeable-views'
import { autoPlay } from 'react-swipeable-views-utils'

import slider_1 from 'app/assets/images/img_bg_1.jpg'
import slider_2 from 'app/assets/images/img_bg_2.jpg'
import slider_3 from 'app/assets/images/img_bg_3.jpg'

const AutoPlaySliders = autoPlay(SwipeableViews);

const sliderSteps = [
  {
    label: 'image-1',
    imgPath: slider_1,
  },
  {
    label: 'image-2',
    imgPath: slider_2,
  },
  {
    label: 'image-3',
    imgPath: slider_3,
  },
]

const styles = theme => ({
  root: {
    flexGrow: 1,
  },

  img: {
    height: '80vh',
    display: 'block',
    overflow: 'hidden',
    width: '100%',
  },
});

class HomePage extends React.Component {
  state = {
    activeStep: 0,
  }


  handleStepChange = activeStep => {
    this.setState({ activeStep });
  };

  render() {
    const { classes, theme } = this.props;
    const { activeStep } = this.state;
    const maxSteps = sliderSteps.length;

    return (
      <div className={classes.root}>
        <AutoPlaySliders
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={this.handleStepChange}
          enableMouseEvents
        >
          {sliderSteps.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <img className={classes.img} src={step.imgPath} alt={step.label} />
              ) : null}
            </div>
          ))}
        </AutoPlaySliders>
      </div>
    )
  }
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
}

export default withStyles(styles, { withTheme: true })(HomePage)

