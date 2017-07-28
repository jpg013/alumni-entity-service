const express          = require('express');
const authMiddleware   = require('../middleware/auth');
const alumniEntityController = require('../controllers/alumniEntity');

const config = app => {
  const apiRouter = express.Router();
  
  // ======================================================
  // Mount Auth Middleware
  // ======================================================
  apiRouter.use(authMiddleware);
  
  // ======================================================
  // alumni controller
  // ======================================================
  apiRoute.use('/alumnientity', alumniEntityController);
  
  // ======================================================
  // Mount Router to app
  // ======================================================
  app.use('/', apiRouter);
  
  // ======================================================
  // Handles all unknown routes
  // ======================================================
  app.get('*', handleUnknownRoutes);
}

function handleUnknownRoutes(req, res) {
  res.status(404).send();
}

module.exports = config;
