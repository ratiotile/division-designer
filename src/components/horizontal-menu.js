import React from 'react'

export const Menu = ({children, style}) => {
  return (
    <div style={style}>
    {React.Children.map(children, (child) => (
      <span>
        {child}
      </span>
    ))}
    </div>
  )
}

export const Item = ({children}) => {
  return (
    {children}
  )
}
