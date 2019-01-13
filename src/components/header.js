import React from 'react'
import Link from 'gatsby-link'

import { ProductionMenu } from './production-menu.js'
import * as H from './horizontal-menu.js'

export const header_height = '30px'

const Header = ({ siteTitle }) => (
  <H.Menu
    style={{
      background: '#5f675a',
      height: header_height,
    }}
  >
    <h1 style={{
      padding: '5px 5px 5px 5px',
      fontSize: 16,
      display: 'inline-block',
      margin: '0'
    }}>
      <Link
        to="/"
        style={{
          color: 'white',
          textDecoration: 'none',
        }}
      >
        {siteTitle}
      </Link>
    </h1>
    [Current State]
    <ProductionMenu />
    [Tech Menu]
  </H.Menu>
)

export default Header
