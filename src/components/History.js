import React from 'react'
import ShearchedList from './SearchedList'
import { Link } from 'react-router-dom'

class History extends React.Component {
  state = {
    searches: this.props.searchedNews
  }

 render() {
  return (
   <div>
    <Link to='/' className='ui primary button'>Back to Search News</Link>
    <div className="ui segment">
      <ShearchedList searches={this.state.searches}  />
    </div>
   </div>
  )
 }
}

export default History