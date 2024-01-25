// names/index.js

const peopleNames = require(`../country/state/city/index`)

const {utilityFunction} = require(`../utilities/utils/index`)

function getPeopleInCity(namesArray = peopleNames) {
  const result = utilityFunction(namesArray)
  return result
}

module.exports = getPeopleInCity()

// ~/coding-practices/coding-practice-2c

// The people names and utility function should be imported in the 'index.js' of 'names' directory
// The first names of the people should be obtained by using the imported utility function
// The exported function from the file 'index.js' of 'names' directory should return the first names of the people
