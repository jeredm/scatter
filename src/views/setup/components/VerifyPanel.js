import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import PropTypes from 'prop-types'

class VerifyPanel extends Component {
  state = { loading: false, version: '', complete: false };

  handleClick = () => {
    this.setState({
      loading: true,
    })
    this.verify()
      .then((response) => {
        this.setState({
          loading: false,
          version: response.results.data.data,
          complete: true,
        })
      })
      .catch((errors) => {
        this.setState({
          loading: false,
          version: 'An error occurred:' + errors,
          complete: true,
        })
      })
  }

  verify = () => {
    return (
      new Promise((resolve, reject) => {
        this.props.verifyMvn()
          .then(results => resolve({ results }))
          .catch(err => reject({ err }))
      })
    )
  }

  render() {
    const style = {
      paddingBottom: '5px',
    }
    const completeLabelStyle = {
      fontWeight: 'bold',
    }
    const completeStyle = {
      paddingTop: '5px',
    }
    const { loading, version, complete } = this.state

    let completeDiv = null
    if (complete) {
      completeDiv = (
        <div style={completeStyle}>
          <span style={completeLabelStyle}>Results of mvn --version:</span><br />
          {version}
        </div>
      )
    } else {
      completeDiv = <div />
    }

    return (
      <div>
        <div style={style}>
          <p>Verify your Maven installation. This verifies the installation by running mvn --version.</p>
        </div>
        <div>
          <Button
            icon='configure'
            content='Verify'
            onClick={this.handleClick}
            loading={loading}
          />
        </div>
        <br />
        {completeDiv}
      </div>
    )
  }
}

VerifyPanel.propTypes = {
  verifyMvn: PropTypes.func.isRequired,
}

export default VerifyPanel
