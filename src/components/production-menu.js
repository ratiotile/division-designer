//@flow
import React from 'react'
import {css} from 'glamor'

import production_img from '../images/Production.png'

const image_css = css({
  display: 'inline-block',
  width: '100%',
  height: '100%',
  padding: 0,
  margin: 0,
  verticalAlign: 'middle',
})

export class ProductionMenu extends React.Component<{}> {
  render() {
    return (
      <img src={production_img} className={image_css} />
    )
  }
}
