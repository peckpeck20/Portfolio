import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import ProjectCards from './ProjectCards';
import IphoneIcon from '@material-ui/icons/PhoneIphone';
import Phonelink from '@material-ui/icons/Phonelink';
import CodeIcon from '@material-ui/icons/Code';

import '../App.css';

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const styles = theme => ({
  root: {
    // backgroundColor: theme.palette.background.paper,
    // padding: '10px',
  },
});

class ShowCase extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root} id="showcase-root">
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            fullWidth
          //for mobile devices use centered
          >
            <Tab icon={<Phonelink />} label="Front-End" />
            <Tab icon={<IphoneIcon />} label="Mobile" />
            <Tab icon={<CodeIcon />} label="Back-End" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >

          <TabContainer dir={theme.direction}>
            <div className='container'>
              <ProjectCards /><ProjectCards /><ProjectCards />
              <ProjectCards /><ProjectCards /><ProjectCards />
            </div>

          </TabContainer>
          <TabContainer dir={theme.direction}>Item Two</TabContainer>
          <TabContainer dir={theme.direction}>Item Three</TabContainer>

        </SwipeableViews>
      </div>
    );
  }
}

ShowCase.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ShowCase);
