const AlumniEntityFactory = require('../factories/alumniEntityFactory');
const AlumniEntityModel   = require('../models/alumniEntityModel');

const defaultFields = {
  _id: 1,
  entityId: 1,
  institutionId: 1,
  createdDate: 1,
  lastUpdatedDate: 1,
  twitterId: 1,
  twitterScreenName: 1,
  twitterFriends: 1,
  twitterFollowers: 1
};

const makeUpdateObject = (fields={}) => {
  return Object.keys(fields).reduce((acc, cur) => {
    switch(cur) {
      case 'twitterId':
      case 'twitterScreenName':
      case 'twitterFriends':
      case 'twitterFollowers':
      case 'entityId':
      case 'institutionId':
        acc.$set[cur] = fields[cur];
        break;
      default:
        break;
      return acc;
    }
    return acc;
  }, { $set: { lastUpdatedDate: new Date() }});
}

function upsert(alumniEntityData, cb) {
  const { entityId } = alumniEntityData;
  if (!entityId) {
    return cb('missing required entity id');
  }
  const $update = makeUpdateObject(alumniEntityData);
  const $query = { entityId };
  const $opts = { upsert: true, new: true, fields: defaultFields };
  AlumniEntityModel.findOneAndUpdate($query, $update, $opts, cb);
}

module.exports = {
  upsert
}
