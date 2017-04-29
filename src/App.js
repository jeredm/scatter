import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { Container, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';



class App extends Component {
  state = { activeItem: 'Nodes'};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state;

    return (
      <div className="App">
        <Container fluid>
          <Menu>
            <Menu.Item header>Scatter</Menu.Item>
            <Menu.Item
              as={Link}
              to='/nodes'
              active={activeItem === 'Nodes'}
              name='Nodes'
              onClick={this.handleItemClick}
            />
            <Menu.Item
              as={Link}
              to='/setup'
              active={activeItem === 'Setup'}
              name='Setup'
              onClick={this.handleItemClick}
            />
          </Menu>
        </Container>
      </div>
    );
  }
}

export default App;
