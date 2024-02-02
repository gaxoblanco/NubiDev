import React from 'react'

export const filterCard = (text, icon) => {
  return (
    <div>
        <img src={icon} />
        <p>{text}</p>
    </div>
  )
}
