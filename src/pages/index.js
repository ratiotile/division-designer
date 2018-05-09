import React from 'react'
import Link from 'gatsby-link'
import {css} from 'glamor'
import priority_icon from '../images/icons/priority.png'
import strength_icon from '../images/icons/strength.png'
import organization_icon from '../images/icons/organization.png'
import combat_width_icon from '../images/icons/combat-width.png'
import soft_attack_icon from '../images/icons/soft-attack.png'
import hard_attack_icon from '../images/icons/hard-attack.png'
import armor_icon from '../images/icons/armor.png'
import piercing_icon from '../images/icons/piercing.png'
import anti_air_icon from '../images/icons/anti-air.png'
import defensiveness_icon from '../images/icons/defensiveness.png'
import toughness_icon from '../images/icons/toughness.png'
import air_defense_icon from '../images/icons/air-defense.png'
import softness_icon from '../images/icons/softness.png'
import speed_icon from '../images/icons/speed.png'
import suppression_icon from '../images/icons/suppression.png'
import supply_icon from '../images/icons/supply.png'
import fuel_icon from '../images/icons/fuel.png'
import officers_icon from '../images/icons/officers.png'
import ic_cost_icon from '../images/icons/ic-cost.png'
import manpower_icon from '../images/icons/manpower.png'
import build_time_icon from '../images/icons/build-time.png'


const image_css = css({
  display: 'block',
  width: '100%',
  padding: 0,
  margin: 0
})


// The main division builder page
const IndexPage = () => (
  <div>
    <table>
      <tr>
        <th>
          <img src={priority_icon} className={image_css} />
        </th>
        <th>
          <img src={strength_icon} className={image_css} />
        </th>
        <th>
          <img src={organization_icon} className={image_css} />
        </th>
        <th>
          <img src={combat_width_icon} className={image_css} />
        </th>
        <th>
          <img src={soft_attack_icon} className={image_css} />
        </th>
        <th>
          <img src={hard_attack_icon} className={image_css} />
        </th>
        <th>
          <img src={piercing_icon} className={image_css} />
        </th>
        <th>
          <img src={armor_icon} className={image_css} />
        </th>
        <th>
          <img src={anti_air_icon} className={image_css} />
        </th>
        <th>
          <img src={defensiveness_icon} className={image_css} />
        </th>
        <th>
          <img src={toughness_icon} className={image_css} />
        </th>
        <th>
          <img src={air_defense_icon} className={image_css} />
        </th>
        <th>
          <img src={softness_icon} className={image_css} />
        </th>
        <th>
          <img src={speed_icon} className={image_css} />
        </th>
        <th>
          <img src={suppression_icon} className={image_css} />
        </th>
        <th>
          <img src={supply_icon} className={image_css} />
        </th>
        <th>
          <img src={fuel_icon} className={image_css} />
        </th>
        <th>
          <img src={officers_icon} className={image_css} />
        </th>
        <th>
          <img src={ic_cost_icon} className={image_css} />
        </th>
        <th>
          <img src={manpower_icon} className={image_css} />
        </th>
        <th>
          <img src={build_time_icon} className={image_css} />
        </th>
      </tr>

    </table>
  </div>
)

export default IndexPage
