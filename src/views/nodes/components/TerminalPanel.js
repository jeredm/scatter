import React, { Component } from 'react'
import { Segment, Grid, Icon } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import StepPanel from './StepPanel'

class TerminalPanel extends Component {
  state = {
    loading: true,
    steps: null,
  }

  componentDidMount = () => {
    this.getStepsData()
      .then((response) => {
        this.setState({
          loading: false,
          steps: response.results.data,
        })
      })
      .catch((errors) => {
        this.setState({
          loading: false,
          error: errors,
        })
      })
  }

  getStepsData = () => {
    return (
      new Promise((resolve, reject) => {
        this.props.getSteps()
          .then(results => resolve({ results }))
          .catch(err => reject({ err }))
      })
    )
  }

  renderSteps = () => {
    const rows = []
    const steps = this.state.steps
    _.each(steps, (step) => {
      rows.push(
        <StepPanel key={step.sequenceN} step={step} />,
      )
    })
    return rows
  }

  render() {
    return (
      <Segment>
        <Grid>
          <Grid.Column width={5}>
            <Icon name='circle thin' size='large' />
            <Icon name='terminal' size='huge' />
          </Grid.Column>
          <Grid.Column width={11}>
            <Grid>
              <Grid.Row>
                {this.renderSteps()}
              </Grid.Row>
            </Grid>
          </Grid.Column>
        </Grid>
      </Segment>
    )
  }
}

TerminalPanel.propTypes = {
  getSteps: PropTypes.func.isRequired,
}

export default TerminalPanel
