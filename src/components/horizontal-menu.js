import React from 'react'

export const Menu = ({children, style}) => {
  return (<nav>
    <ul style={Object.assign({
      listStyleType: 'none'
    }, style)}>
    {React.Children.map(children, (child) => (
      <Item>
        {child}
      </Item>
    ))}
    </ul>
  </nav>)
}

export const Item = ({children}) => {
  return (
    <li style={{display: 'inline-block'}}>
      {children}
    </li>
  )
}
