const express = require("express");
const morgan = require("morgan");
const redWineRouter = require("./routes/redWineRouter");
const whiteWineRouter = require("./routes/whiteWineRouter");
const roseWineRouter = require("./routes/roseWineRouter");
const sparklingWineRouter = require("./routes/sparklingWineRouter");
const petnatWineRouter = require("./routes/petnatWineRouter");
const skincontactWineRouter = require("./routes/skincontactWineRouter");
const piquetteWineRouter = require("./routes/piquetteWineRouter");

const hostname = "localhost";
const port = 3000;

const app = express();
app.use(morgan("dev"));

app.use("/red", redWineRouter);
app.use("/white", whiteWineRouter);
app.use("/rose", roseWineRouter);
app.use("/sparkling", sparklingWineRouter);
app.use("/petnat", petnatWineRouter);
app.use("/skincontact", skincontactWineRouter);
app.use("/piquette", piquetteWineRouter);

app.use(express.static(__dirname + "/public"));

app.use((req, res) => {
  console.log(req.headers);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end(
    "<html><body><h1>This is an Express Server for Little Wine Shop</h1></body></html>"
  );
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
