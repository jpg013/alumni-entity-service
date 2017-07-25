const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ETLJobSchema = new Schema({
  createdDate: { type: Date, required: true, default: Date.now },
  finishedDate: { type: Date },
  institutionId: {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Institution'},
});

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('ETLJobSchema', ETLJobSchema);
