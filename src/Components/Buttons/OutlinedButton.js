import React from 'react'

const OutlinedButton = ({ text, href }) => {
  return (
    <a className='c-outlined-button' href={href}>{text}</a>
  )
}

export default OutlinedButton