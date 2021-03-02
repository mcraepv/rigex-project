const queries = require('./queries');
const mutations = require('./mutations');
const rigResolver = require('./rig');
const chooseUsFeaturesResolver = require('./chooseUsFeatures');
const chooseUsItemsResolver = require('./chooseUsItems');
const servicesResolver = require('./services');
const contentResolver = require('./content');
const aboutTextTypesResolver = require('./aboutTextTypes');

module.exports = {
  Query: queries,
  Mutation: mutations,
  AboutText: aboutTextTypesResolver,
  Rig: rigResolver,
  ContentTextByType: contentResolver,
  Services: servicesResolver,
  ChooseUsFeatures: chooseUsFeaturesResolver,
  ChooseUsItems: chooseUsItemsResolver
};
