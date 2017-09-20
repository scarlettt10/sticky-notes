import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import StickyForm from './components/StickyForm';
import StickyList from './components/StickyList';
import { Header } from 'semantic-ui-react';


class App extends Component {
  state = {
    stickies: [
      {
        id: 1,
        title: 'Sticky Note',
        body: 'Sticky Body'
      },
      {
        id: 2,
        title: 'Sticky Note',
        body: 'Sticky Body'
      },
      {
        id: 3,
        title: 'Sticky Note',
        body: 'Sticky Body'
      }
    ]
  }

  createSticky = () => {

  }

  updateSticky = () => {

  }

  deleteSticky = (id) => {
    const stickies = this.state.stickies.filter( sticky => {
      return sticky.id !== id
    })
    this.setState({ stickies: stickies })
  }

  render() {
    return (
      <div className='App'>
        <Header as='h1'>Best Sticky Notes</Header>
        <StickyForm />
        <StickyList 
          stickyList={ this.state.stickies } 
          deleteStickyFunction={ this.deleteSticky }

        />
      </div>
    );
  }
}

export default App;
