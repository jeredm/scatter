import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import ConfigPanel from './components/ConfigPanel'
import ServersPanel from './components/ServersPanel'

class NodesView extends Component {
  render() {
    const style = {
      padding: '10px',
    }

    return (
      <div style={style}>
        <Grid divided>
          <Grid.Column width={10}>
            <ServersPanel />
          </Grid.Column>
          <Grid.Column width={6}>
            <ConfigPanel />
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default NodesView
