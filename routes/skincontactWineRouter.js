const express = require("express");
const skincontactWineRouter = express.Router();

skincontactWineRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.end("Will send all the skincontact wines to you");
  })
  .post((req, res) => {
    res.end(
      `Will add the wine: ${req.body.name} with description: ${req.body.description}`
    );
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /skincontact");
  })
  .delete((req, res) => {
    res.end("Deleting all skincontact wines");
  });

module.exports = skincontactWineRouter;
