import React from 'react'

const SearchedList = (props) => {
 const searches = props.searches.map(( searchedItem, index) => {
  
  return (
    <li value='-' key={index}>{searchedItem}</li>
  )

 })

 return (
  <div>
   <ol className='ui list'>
    {searches}
   </ol>
  </div>
 )
}

export default SearchedList