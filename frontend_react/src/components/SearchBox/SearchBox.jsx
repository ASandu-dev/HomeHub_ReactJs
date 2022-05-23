import React from 'react'

import './SearchBox.scss'
const SearchBox = (props) => {
  return (
    <div className='col col-sm-4 w-100 d-flex align-items-center'>
        <input className='form-control' 
        value={props.value}
        onChange={(event)=> props.setSearchValue(event.target.value)}
        placeholder='Type to search...'>

        </input>

    </div>
  )
}

export default SearchBox