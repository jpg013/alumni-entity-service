const AlumniIntegrationModel = require('../models/alumniIntegrationModel');

function validateIntegrationFields(fields) {
  if (!fields || typeof fields !== 'object') return false;
  if (!fields.institutionId ||
      !fields.createdById ||
      !fields.createdByName ||
      !fields.type ||
      !fields.alumni ||
      !fields.mediaCredentials ||
      !fields.neo4jCredentials ||
      !fields.totalCount
     ) { return false; }
  return true;
}

function scrubIntegrationData(data) {
  if (!data || typeof data !== 'object') return {};
  const { institutionId, createdById, createdByName, type, alumni, mediaCredentials, neo4jCredentials, totalCount } = data;
  return {
    institutionId,
    createdById,
    createdByName,
    type,
    alumni,
    mediaCredentials,
    neo4jCredentials,
    totalCount
  };
}

function buildIntegrationModel(fields) {
  const { institutionId, createdById, createdByName, type, alumni, mediaCredentials, neo4jCredentials, totalCount } = fields;
  
  const props = {
    institutionId,
    createdById,
    createdByName,
    type,
    alumni,
    mediaCredentials,
    neo4jCredentials,
    totalCount
  };

  return new AlumniIntegrationModel(props);
}

module.exports = {
  buildIntegrationModel,
  scrubIntegrationData,
  validateIntegrationFields
};
