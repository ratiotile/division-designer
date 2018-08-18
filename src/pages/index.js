import React from 'react'
import Link from 'gatsby-link'
import ReactTooltip from 'react-tooltip'
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

import units from '../model/units.js'

// process unit data, adding in missing values
const unit_defaults = {
  ap_attack: 0,
  armor_value: 0
}
const land_units = []
for(const name in units){
  const unit = units[name]
  if(unit.type == "land"){
    land_units.push(Object.assign({}, unit_defaults, unit))
  }
}

const image_css = css({
  display: 'block',
  width: '24px',
  padding: 0,
  margin: '0 auto 0 auto'
})

const token_css = css({
  display: 'inline-block',
  padding: 0,
  margin: 0,
  verticalAlign: '-15%'
})

const cell_css = css({
  fontSize: 12,
  padding: 0,
  margin: 0,
  fontFamily: 'monospace'
})

const divBuilderCell = (value)=>(
  <td className={cell_css}>
    {value}
  </td>
)

const divBuilderRow = ({display, max_strength, default_organisation, combat_width, soft_attack, hard_attack, ap_attack, armor_value, air_attack, defensiveness, toughness, air_defence, softness, maximum_speed, suppression, supply_consumption, fuel_consumption, officers, build_cost_ic, build_cost_manpower, build_time})=>(
  <tr>
    <td className={cell_css}>
      <img src={display.counter} className={token_css} /> {display.name}
    </td>
    <td className={cell_css} style={{paddingLeft: '5px'}}>
      {max_strength}
    </td>
    <td className={cell_css} style={{paddingLeft: '5px'}}>
      {default_organisation}
    </td>
    <td className={cell_css} style={{textAlign: 'center'}}>
      {combat_width}
    </td>
    <td className={cell_css} style={{padding: '0 3px 0 6px'}}>
      {soft_attack}
    </td>
    <td className={cell_css} style={{padding: '0 3px 0 6px'}}>
      {hard_attack}
    </td>
    <td className={cell_css} style={{paddingLeft: '6px'}}>
      {ap_attack}
    </td>
    <td className={cell_css} style={{textAlign: 'center'}}>
      {armor_value}
    </td>
    <td className={cell_css} style={{padding: '0 3px 0 6px'}}>
      {air_attack}
    </td>
    <td className={cell_css} style={{padding: '0 3px 0 6px'}}>
      {defensiveness}
    </td>
    <td className={cell_css} style={{padding: '0 3px 0 6px'}}>
      {toughness}
    </td>
    <td className={cell_css} style={{padding: '0 3px 0 6px'}}>
      {air_defence}
    </td>
    <td className={cell_css} style={{padding: '0 3px 0 6px'}}>
      {softness}
    </td>
    <td className={cell_css} style={{padding: '0 3px 0 6px'}}>
      {maximum_speed}
    </td>
    <td className={cell_css} style={{padding: '0 3px 0 6px'}}>
      {suppression}
    </td>
    <td className={cell_css} style={{padding: '0 3px 0 6px'}}>
      {supply_consumption}
    </td>
    <td className={cell_css} style={{padding: '0 3px 0 6px'}}>
      {fuel_consumption}
    </td>
    <td className={cell_css}
        style={{padding: '0 6px 0 6px', textAlign: 'right'}}>
      {officers}
    </td>
    <td className={cell_css} style={{padding: '0 3px 0 6px'}}>
      {build_cost_ic}
    </td>
    <td className={cell_css} style={{padding: '0 3px 0 6px'}}>
      {build_cost_manpower}
    </td>
    <td className={cell_css}
        style={{padding: '0 6px 0 6px', textAlign: 'right'}}>
      {build_time}
    </td>
  </tr>
)

const tooltip = css({
  //position: 'relative',
  //display: 'inline-block'
})

const tooltip_text = css({
  visibility: 'hidden',
  position: 'absolute',
  zIndex: 1,
})

const headerIcon = (icon, help)=>(
  <th className={`${cell_css}`}
      style={{
        cursor: 'pointer',
        textAlign: 'center'
      }}
      data-tip={help}
  >
    <img src={icon} className={image_css} />
  </th>
)


// The main division builder page
const IndexPage = () => (
  <div>
    <ReactTooltip />
    <table>
      <thead>
        <tr>
          {headerIcon(priority_icon, 'priority')}
          {headerIcon(strength_icon, 'Strength')}
          {headerIcon(organization_icon, 'Organization')}
          {headerIcon(combat_width_icon, 'Combat Width')}
          {headerIcon(soft_attack_icon, 'Soft Attack')}
          {headerIcon(hard_attack_icon, 'Hard Attack')}
          {headerIcon(piercing_icon, 'Armor Piercing')}
          {headerIcon(armor_icon, 'Armor')}
          {headerIcon(anti_air_icon, 'Anti-air')}
          {headerIcon(defensiveness_icon, 'Defensiveness')}
          {headerIcon(toughness_icon, 'Toughness')}
          {headerIcon(air_defense_icon, 'Air Defense')}
          {headerIcon(softness_icon, 'Softness')}
          {headerIcon(speed_icon, 'Max Speed')}
          {headerIcon(suppression_icon, 'Partisan Suppression')}
          {headerIcon(supply_icon, 'Supply Consumption')}
          {headerIcon(fuel_icon, 'Fuel Consumption')}
          {headerIcon(officers_icon, 'Officers')}
          {headerIcon(ic_cost_icon, 'IC Cost')}
          {headerIcon(manpower_icon, 'Manpower Cost')}
          {headerIcon(build_time_icon, 'Build Time')}
        </tr>
      </thead>
      <tbody>
        {land_units.map(divBuilderRow)}
      </tbody>
    </table>
  </div>
)

export default IndexPage
