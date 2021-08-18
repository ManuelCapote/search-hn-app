import React from 'react'

const NewsList = (props) => {
 const news = props.news.map(({ url, title, author, created_at, id }) => {
  
  return (
   <div key={id} className='item'>
    <div className="content">
     <a target='_blank' rel="noreferrer" className="header" href={url} >{title}</a>
     <div className="description">
      <div><b>Author: </b> {author}</div>
      <div><b>Created: </b> {created_at}</div>
     </div>
     <br />
    </div >
   </div >
  )
 })

 return (
  <div key='1' className='ui list'>
   {news}
  </div>
 )
}

export default NewsList