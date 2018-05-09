import React from 'react'
import {css} from 'glamor'
import production_img from '../images/Production.png'
import technology_img from '../images/Technology.png'
import division_img from '../images/Division-Production.png'
import wing_img from '../images/Air_Wing-Production.png'
import flotilla_img from '../images/Flotilla-Production.png'
import tech_infantry from '../images/tech-infantry.png'
import tech_armor from '../images/tech-armor.png'
import tech_escort from '../images/tech-escort.png'
import tech_capital from '../images/tech-capital.png'
import tech_bomber from '../images/tech-bomber.png'
import tech_fighter from '../images/tech-fighter.png'
import tech_secret from '../images/tech-secret.png'
import tech_land from '../images/tech-land.png'
import tech_naval from '../images/tech-naval.png'
import tech_air from '../images/tech-air.png'
import tech_industry from '../images/tech-industry.png'

const v_flexbox = css({
  width: '100px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch'
})

const side_button = css({
  flex: `0 1 auto`,
  padding: 0,
  margin: 0
})

const image_css = css({
  display: 'block',
  width: '100%',
  padding: 0,
  margin: 0
})

const ProdTechMenu = () => (
  <div className={v_flexbox}>
    <div className={side_button}>
      <img src={production_img} className={image_css} />
    </div>
    <div className={side_button}>
      <img src={division_img} className={image_css} />
    </div>
    <div className={side_button}>
      <img src={wing_img} className={image_css} />
    </div>
    <div className={side_button}>
      <img src={flotilla_img} className={image_css} />
    </div>
    <div className={side_button}>
      <img src={technology_img} className={image_css} />
    </div>
    <div className={side_button}>
      <img src={tech_infantry} className={image_css} />
    </div>
    <div className={side_button}>
      <img src={tech_armor} className={image_css} />
    </div>
    <div className={side_button}>
      <img src={tech_escort} className={image_css} />
    </div>
    <div className={side_button}>
      <img src={tech_capital} className={image_css} />
    </div>
    <div className={side_button}>
      <img src={tech_bomber} className={image_css} />
    </div>
    <div className={side_button}>
      <img src={tech_fighter} className={image_css} />
    </div>
    <div className={side_button}>
      <img src={tech_industry} className={image_css} />
    </div>
    <div className={side_button}>
      <img src={tech_secret} className={image_css} />
    </div>
    <div className={side_button}>
      <img src={tech_land} className={image_css} />
    </div>
    <div className={side_button}>
      <img src={tech_naval} className={image_css} />
    </div>
    <div className={side_button}>
      <img src={tech_air} className={image_css} />
    </div>
  </div>
)

export default ProdTechMenu
