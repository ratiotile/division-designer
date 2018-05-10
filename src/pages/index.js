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
import arm_counter from "../images/counters/armor.png"

const unit = units.armor // TODO: iterate


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

const divBuilderCell = (value)=>(
  <td>
    {value}
  </td>
)

const divBuilderRow = ({type, str, org, cw, sa, ha, ap, av, aa, def, tou, ad, soft, spd, suppress, supply, fuel, officers, ic, mp, time})=>(
  <tr>
    <td>
      <img src={type.counter} className={token_css} /> {type.name}
    </td>
    {divBuilderCell('3k')}
    {divBuilderCell(60)}
    {divBuilderCell(1)}
    {divBuilderCell(5)}
    {divBuilderCell(5)}
    {divBuilderCell(8)}
    {divBuilderCell(9)}
    {divBuilderCell(0)}
    {divBuilderCell(7)}
    {divBuilderCell(13)}
    {divBuilderCell(0)}
    {divBuilderCell('15%')}
    {divBuilderCell(8)}
    {divBuilderCell(0)}
    {divBuilderCell(1.66)}
    {divBuilderCell(3.40)}
    {divBuilderCell(100)}
    {divBuilderCell(11.36)}
    {divBuilderCell(2.33)}
    {divBuilderCell(185)}
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
      {divBuilderRow({
        type: {counter: arm_counter, name: 'Armor'},
        str: '3k',
        org: 60,
        width: 1,
        sa: 5,
        ha: 5,
        ap: 8,
        av: 9,
        aa: 0,
        def: 7,
        tou: 13,
        ad: 0,
        soft: '15%',
        spd: 8,
        suppress: 0,
        supply: 1.66,
        fuel: 3.40,
        officers: 100,
        ic: 11.36,
        mp: 2.33,
        time: 185,
      })}
    </table>
  </div>
)

export default IndexPage
