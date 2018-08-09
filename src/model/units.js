import alpini_counter from "../images/counters/alpini_brigade.png"
import alpins_counter from "../images/counters/alpins_brigade.png"
import aa_counter from "../images/counters/anti_air_brigade.png"
import at_counter from "../images/counters/anti_tank_brigade.png"
import arm_counter from "../images/counters/armor.png"
import ac_counter from "../images/counters/armored_car_brigade.png"
import art_counter from "../images/counters/artillery_brigade.png"
import bergsjaeger_counter from "../images/counters/bergsjaeger_brigade.png"
import cavalry_counter from "../images/counters/cavalry_brigade.png"
import engineer_counter from "../images/counters/engineer_brigade.png"
import garrison_counter from "../images/counters/garrison_brigade.png"
import guards_counter from "../images/counters/guards_brigade.png"
import gurkha_counter from "../images/counters/gurkha_brigade.png"
import heavy_armor_counter from "../images/counters/heavy_armor_brigade.png"
import hq_counter from "../images/counters/hq_brigade.png"
import imperial_counter from "../images/counters/imperial_brigade.png"
import infantry_counter from "../images/counters/infantry_brigade.png"
import light_armor_counter from "../images/counters/light_armor_brigade.png"
import marine_counter from "../images/counters/marine_brigade.png"
import mechanized_counter from "../images/counters/mechanized_brigade.png"
import militia_counter from "../images/counters/militia_brigade.png"
import mot_AA_counter from "../images/counters/mot_AA_brigade.png"
import motorized_counter from "../images/counters/motorized_brigade.png"
import paratrooper_counter from "../images/counters/paratrooper_brigade.png"
import police_counter from "../images/counters/police_brigade.png"
import ranger_counter from "../images/counters/ranger_brigade.png"
import rocket_artillery_counter from "../images/counters/rocket_artillery_brigade.png"
import sp_artillery_counter from "../images/counters/sp_artillery_brigade.png"
import sp_rct_artillery_counter from "../images/counters/sp_rct_artillery_brigade.png"
import super_heavy_armor_counter from "../images/counters/super_heavy_armor_brigade.png"
import tank_destroyer_counter from "../images/counters/tank_destroyer_brigade.png"
import waffenSS_counter from "../images/counters/waffenSS_brigade.png"

const r = require.context('../../data/tfh/units', false, /\.json$/)

var cache = {}
r.keys().forEach(key => {
  var raw = r(key)
  raw.counter =
  Object.assign(cache, raw)
})

const unit_display = {
  alpini_brigade: {
    counter: alpini_counter,
    name: 'Alpini'
  },
  alpins_brigade: {
    counter: alpins_counter,
    name: 'Alpins'
  },
  anti_air_brigade: {
    counter: aa_counter,
    name: 'Anti-air'
  },
  anti_tank_brigade: {
    counter: at_counter,
    name: 'Anti-tank'
  },
  armor_brigade: {
    counter: arm_counter,
    name: 'Armour'
  },
  armored_car_brigade: {
    counter: ac_counter,
    name: 'Armoured Car'
  },
  artillery_brigade: {
    counter: art_counter,
    name: 'Artillery'
  },
  bergsjaeger_brigade: {
    counter: bergsjaeger_counter,
    name: 'Mountain'
  },
  cavalry_brigade: {
    counter: cavalry_counter,
    name: 'Cavalry'
  },
  engineer_brigade: {
    counter: engineer_counter,
    name: 'Engineer'
  },
  garrison_brigade: {
    counter: garrison_counter,
    name: 'Garrison'
  },
  guards_brigade: {
    counter: guards_counter,
    name: 'Red Guard'
  },
  gurkha_brigade: {
    counter: gurkha_counter,
    name: 'Gurkha'
  },
  heavy_armor_brigade: {
    counter: heavy_armor_counter,
    name: 'Heavy Armour'
  },
  hq_brigade: {
    counter: hq_counter,
    name: 'Headquarters'
  },
  imperial_brigade: {
    counter: imperial_counter,
    name: 'Imperial Guard'
  },
  infantry_brigade: {
    counter: infantry_counter,
    name: 'Infantry'
  },
  light_armor_brigade: {
    counter: light_armor_counter,
    name: 'Light Armour'
  },
  marine_brigade: {
    counter: marine_counter,
    name: 'Marine'
  },
  mechanized_brigade: {
    counter: mechanized_counter,
    name: 'Mechanised'
  },
  militia_brigade: {
    counter: militia_counter,
    name: 'Militia'
  },
  mot_aa_brigade: {
    counter: mot_AA_counter,
    name: 'Motorised A-A'
  },
  motorized_brigade: {
    counter: motorized_counter,
    name: 'Motorised'
  },
  paratrooper_brigade: {
    counter: paratrooper_counter,
    name: 'Paratrooper'
  },
  partisan_brigade: {
    counter: militia_counter,
    name: 'Partisan'
  },
  police_brigade: {
    counter: police_counter,
    name: 'Military Police'
  },
  ranger_brigade: {
    counter: ranger_counter,
    name: 'Ranger'
  },
  rocket_artillery_brigade: {
    counter: rocket_artillery_counter,
    name: 'Rocket Artillery'
  },
  sp_artillery_brigade: {
    counter: sp_artillery_counter,
    name: 'S-P Artillery'
  },
  sp_rct_artillery_brigade: {
    counter: sp_rct_artillery_counter,
    name: 'S-P Rocket Artillery'
  },
  super_heavy_armor_brigade: {
    counter: super_heavy_armor_counter,
    name: 'SH Armoured'
  },
  tank_destroyer_brigade: {
    counter: tank_destroyer_counter,
    name: 'Tank Destroyer'
  },
  waffen_brigade: {
    counter: waffenSS_counter,
    name: 'Waffen SS'
  },
}

for(const prop in cache){
  if(unit_display[prop]){
    cache[prop].display = unit_display[prop]
  }
  else{
    cache[prop].display = {
      counter: undefined,
      name: prop
    }
  }
}

console.log("units data", cache)

const units = cache

export default units;
