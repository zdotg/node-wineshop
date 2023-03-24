const express = require("express");
const whiteWineRouter = express.Router();

whiteWineRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.end("Will send all the white wines to you");
  })
  .post((req, res) => {
    res.end(
      `Will add the wine: ${req.body.name} with description: ${req.body.description}`
    );
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /white");
  })
  .delete((req, res) => {
    res.end("Deleting all white wines");
  });

module.exports = whiteWineRouter;
