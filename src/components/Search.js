import React from 'react';
import hnsearch from '../api/hnsearch';
import SearchBar from './SearchBar';
import NewsList from './NewsList';
import { Link } from 'react-router-dom'

class Search extends React.Component {
  constructor() {
    super()
    this.state = { 
      news: [],
      searches: [],
   }
  }

  onSearchSubmit = async (term) => {
    const response = await hnsearch
      .get('search?', {
        params: { query: term }
      })

    this.setState({ news: response.data.hits })
    this.updateSearchState(term)
  }

  updateSearchState = (term) => {
    this.setState({
      searches: [...this.state.searches, term]
    })
    this.props.sendData(this.state.searches)
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <Link to='/history'className='ui primary button'>Shearches in this session</Link>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <NewsList news={this.state.news} />
      </div>
    );
  }
}

export default Search;
