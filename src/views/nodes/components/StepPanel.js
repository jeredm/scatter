import React, { Component } from 'react'
import PropTypes from 'prop-types'

class StepPanel extends Component {
  render() {
    const { stepNm, mvnCmd, path } = this.props.step
    return (
      <div>{stepNm}: {mvnCmd} - {path}</div>
    )
  }
}

StepPanel.propTypes = {
  step: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    stepNm: PropTypes.string,
    mvnCmd: PropTypes.string,
    path: PropTypes.string,
  }).isRequired,
}

export default StepPanel
