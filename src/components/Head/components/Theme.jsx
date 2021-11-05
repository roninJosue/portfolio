import React from 'react'

const Theme = ({theme, handleChange}) => {
  return(
    <div role='button' className='icon-theme' onClick={handleChange}>
      {
        theme ? <i className='fa fa-sun-o' />
          : <i className='fa fa-moon-o' />
      }
    </div>
  )
}

export default Theme