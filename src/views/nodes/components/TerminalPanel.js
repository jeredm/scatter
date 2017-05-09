import React, { Component } from 'react'
import { Segment, Grid, Icon } from 'semantic-ui-react'
import PropTypes from 'prop-types'

class TerminalPanel extends Component {
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
                Install:
                <br />
                &nbsp;&nbsp; /Users/me/git/project1
                <br />
                &nbsp;&nbsp; /Users/me/git/project2
                <br />
                Deploy:
                <br />
                &nbsp;&nbsp; /Users/me/git/project3
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
