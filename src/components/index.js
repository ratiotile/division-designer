import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header, {header_height} from '../components/header'
import './index.css'
import {css} from 'glamor'
import ProdTechMenu, {menu_width} from '../components/prod-tech-menu.js'

const h_flexbox = css({
  display: 'flex',
  flexDirection: 'row',
  height: `calc(100% - ${header_height})`,
})

const db_col = css({
  flex: '0 1 auto',
  overflow: 'hidden',
})

const Layout = ({ children, data }) => (
  <div style={{
    height: '100vh', // limit to viewport height
  }}>
    <Helmet
      title={'data.site.siteMetadata.title'}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header siteTitle={'data.site.siteMetadata.title'} />
    <div className={h_flexbox}>
      <div className={db_col} style={{
        width: menu_width
      }}>
        <ProdTechMenu />
      </div>
      <div className={db_col}>
        {children}
      </div>
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
