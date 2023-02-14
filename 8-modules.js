const sayHi = require('./5-utils') // always start a ./ even if at the root level.
const names = require('./4-names')
const data = require('./6-alternative-flavors')

//function will run even though i didn't export the module into a variable because node wraps it, as long as the function in executed in the external module.
require('./7-mind-grenade')

sayHi(names.john)
sayHi("poopoomanstan")
