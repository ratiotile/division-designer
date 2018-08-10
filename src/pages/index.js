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
  width: '100%',
  padding: 0,
  margin: 0
})

const token_css = css({
  display: 'inline-block',
  padding: 0,
  margin: 0
})

const cell_css = css({
  fontSize: 12,
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
    {divBuilderCell(max_strength)}
    {divBuilderCell(default_organisation)}
    {divBuilderCell(combat_width)}
    {divBuilderCell(soft_attack)}
    {divBuilderCell(hard_attack)}
    {divBuilderCell(ap_attack)}
    {divBuilderCell(armor_value)}
    {divBuilderCell(air_attack)}
    {divBuilderCell(defensiveness)}
    {divBuilderCell(toughness)}
    {divBuilderCell(air_defence)}
    {divBuilderCell(softness)}
    {divBuilderCell(maximum_speed)}
    {divBuilderCell(suppression)}
    {divBuilderCell(supply_consumption)}
    {divBuilderCell(fuel_consumption)}
    {divBuilderCell(officers)}
    {divBuilderCell(build_cost_ic)}
    {divBuilderCell(build_cost_manpower)}
    {divBuilderCell(build_time)}
  </tr>
)

const headerIcon = (icon)=>(
  <th>
    <img src={icon} className={image_css} />
  </th>
)


// The main division builder page
const IndexPage = () => (
  <div>
    <table>
      <thead>
        <tr>
          {headerIcon(priority_icon)}
          {headerIcon(strength_icon)}
          {headerIcon(organization_icon)}
          {headerIcon(combat_width_icon)}
          {headerIcon(soft_attack_icon)}
          {headerIcon(hard_attack_icon)}
          {headerIcon(piercing_icon)}
          {headerIcon(armor_icon)}
          {headerIcon(anti_air_icon)}
          {headerIcon(defensiveness_icon)}
          {headerIcon(toughness_icon)}
          {headerIcon(air_defense_icon)}
          {headerIcon(softness_icon)}
          {headerIcon(speed_icon)}
          {headerIcon(suppression_icon)}
          {headerIcon(supply_icon)}
          {headerIcon(fuel_icon)}
          {headerIcon(officers_icon)}
          {headerIcon(ic_cost_icon)}
          {headerIcon(manpower_icon)}
          {headerIcon(build_time_icon)}
        </tr>
      </thead>
      <tbody>
        {land_units.map(divBuilderRow)}
      </tbody>
    </table>
  </div>
)

export default IndexPage
