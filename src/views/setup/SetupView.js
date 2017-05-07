import React, { Component } from 'react';
import PropTypes from 'prop-types';
import VerifyPanel from './components/VerifyPanel';
import { connect } from 'react-redux';
import { verifyMvn } from '../../actions/verify';

class SetupView extends Component {


  render() {
    const style = {
      padding: '10px',
    };

    return (
      <div style={style}>
        <VerifyPanel verifyMvn={this.props.verifyMvn}/>
      </div>
    );
  }
}

SetupView.propTypes = {
  verifyMvn: PropTypes.func.isRequired,
}

export default connect(null, { verifyMvn })(SetupView);
