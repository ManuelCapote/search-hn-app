import React from 'react';
import History from './History';
import Search from './Search';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

class App extends React.Component {
  constructor() {
    super()
    this.getDataFromSearch = this.getDataFromSearch.bind(this)
    this.state = {
      searches: []
    }
  }

  getDataFromSearch(value) {
    this.setState({
      searches: value
    })
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <Router>
          <Switch>
            <Route path='/history'><History searchedNews={this.state.searches} /></Route>
            <Route path='/'><Search sendData={this.getDataFromSearch} /></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
