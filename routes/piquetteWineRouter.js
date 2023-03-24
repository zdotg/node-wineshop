const express = require("express");
const piquetteWineRouter = express.Router();

piquetteWineRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.end("Will send all the piquette wines to you");
  })
  .post((req, res) => {
    res.end(
      `Will add the wine: ${req.body.name} with description: ${req.body.description}`
    );
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /piquette");
  })
  .delete((req, res) => {
    res.end("Deleting all piquette wines");
  });

module.exports = piquetteWineRouter;
