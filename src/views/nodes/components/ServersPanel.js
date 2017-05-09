import React, { Component } from 'react'
import { Header, Button, Icon, Segment, Grid } from 'semantic-ui-react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import TerminalPanel from './TerminalPanel'
import getSteps from '../../../actions/steps'

class ServersPanel extends Component {
  render() {
    return (
      <div>
        <Header as='h1'>Servers</Header>
        <Button content='New Server' icon='server' labelPosition='left' />
        <Button content='Deploy' icon='cloud upload' labelPosition='left' />
        <TerminalPanel getSteps={this.props.getSteps} />
        <Segment>
          <Grid>
            <Grid.Row>
              <Grid.Column width={5}>
                <Icon name='check circle' size='large' />
                <Icon name='server' size='huge' />
              </Grid.Column>
              <Grid.Column width={11}>
                Name: Server 1
                <br />
                URL: http://www.myplace.com/manager/text
                <br />
                Credential: Svr1
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment>
          <Grid>
            <Grid.Row>
              <Grid.Column width={5}>
                <Icon name='circle thin' size='large' />
                <Icon name='server' size='huge' />
              </Grid.Column>
              <Grid.Column width={11}>
                Name: Server 2
                <br />
                URL: http://www.otherplace.com/manager/text
                <br />
                Credential: Svr2
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </div>
    )
  }
}

ServersPanel.propTypes = {
  getSteps: PropTypes.func.isRequired,
}

export default connect(null, { getSteps })(ServersPanel)
