import React from 'react';
import { withRouter } from 'react-router';
import ArrowNavigation from './ArrowNavigation';

class ArrowNavigationContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleBackClick = this.handleBackClick.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
  }

  handleBackClick() {
    const { location, history } = this.props;
    if (location.pathname === '/car-picker') {
      history.push('/time-picker');
    } else if (location.pathname === '/additional-options') {
      history.push('/car-picker');
    } else if (location.pathname === '/final-form') {
      history.push('/additional-options');
    }
  }

  handleNextClick() {
    const { location, history } = this.props;
    if (location.pathname === '/time-picker') {
      history.push('/car-picker');
    } else if (location.pathname === '/car-picker') {
      history.push('/additional-options');
    } else if (location.pathname === '/additional-options') {
      history.push('/final-form');
    }
  }

  render() {
    return (
      <ArrowNavigation
        onBackClick={this.handleBackClick}
        onNextClick={this.handleNextClick}
        isFirst={false}
        isLast={false}
        isDisabled={false}
      />
    );
  }
}

export default withRouter(ArrowNavigationContainer);
