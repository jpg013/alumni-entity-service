const express             = require('express');
const alumniEntityService = require('../services/alumniEntityService');

// ======================================================
// Controller
// ======================================================
const alumniEntityController = express.Router();

// ======================================================
// Response Handler
// ======================================================
function responseHandler(req, res) {
  const { error, results} = req;
  if (error) {
    return res.status(500).send({error});
  }
  return res.status(200).send({results});
}

function upsertAlumniEntity(req, res, next) {
  const { alumniEntityData } = req.body;
  alumniEntityService.upsert(alumniEntityData, (err, results) => {
    if (err) {
      req.error = err;
    } else {
      req.results = results;
    }
    next();
  });
}

// ======================================================
// Wire up controller methods
// ======================================================
alumniEntityController.post('/', upsertAlumniEntity, responseHandler);

module.exports = alumniEntityController;
