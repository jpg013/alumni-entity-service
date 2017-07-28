const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AlumniEntitySchema = new Schema({
  entityId: { type: String, required: true, unique: true },
  institutionId: { type: String, required: true },
  createdDate: { type: Date, required: true, default: Date.now },
  lastUpdatedDate: { type: Date, default: Date.now },
  twitterId: { type: String },
  twitterScreenName: { type: String },
  twitterFriends: [{ type: String }],
  twitterFollowers: [{ type: String }]
});

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('AlumniEntity', AlumniEntitySchema);
