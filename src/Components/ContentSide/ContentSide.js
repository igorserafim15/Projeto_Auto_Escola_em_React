import React from 'react'

const ContentSide = ({children}) => {
  return (
    <div className="c-content-side">
      <div className='content-side-column'>
        {children}
      </div>
    </div>
  )
}

export default ContentSide