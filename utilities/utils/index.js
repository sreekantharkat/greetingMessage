// utilities/utils/index.js

const getFirstNames = list => {
  return list.map(eachPerson => eachPerson.firstName)
}

module.exports = getFirstNames
