import React, { Component } from 'react'
import { Header, Button, Icon, Segment, Grid } from 'semantic-ui-react'

class ServersPanel extends Component {
  render() {
    return (
      <div>
        <Header as='h1'>Servers</Header>
        <Button content='New Server' icon='server' labelPosition='left' />
        <Button content='Deploy' icon='cloud upload' labelPosition='left' />
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

export default ServersPanel
