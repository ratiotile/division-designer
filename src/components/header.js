import React from 'react'
import Link from 'gatsby-link'

export const header_height = '30px'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: '#5f675a',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        height: header_height,
      }}
    >
      <h1 style={{
        margin: 'auto auto',
        fontSize: 16,
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
    </div>
  </div>
)

export default Header
