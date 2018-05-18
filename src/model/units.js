import arm_counter from "../images/counters/armor.png"

const r = require.context('../../data/tfh/units', false, /\.json$/)

var cache = {}
r.keys().forEach(key => {
  var raw = r(key)
  raw.counter =
  Object.assign(cache, raw)
})

const unit_display = {
  armor_brigade: {
    counter: arm_counter,
    name: 'Armour'
  }
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
