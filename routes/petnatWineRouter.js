const express = require("express");
const petnatWineRouter = express.Router();

petnatWineRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.end("Will send all the petnat wines to you");
  })
  .post((req, res) => {
    res.end(
      `Will add the wine: ${req.body.name} with description: ${req.body.description}`
    );
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /petnat");
  })
  .delete((req, res) => {
    res.end("Deleting all petnat wines");
  });

module.exports = petnatWineRouter;
