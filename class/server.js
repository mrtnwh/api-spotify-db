const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;

    this.middlewares();
    this.router();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.static("public"));
  }

  router() {
    this.app.use("/api/v1/artist", require("../routes/artist.js"));
    this.app.use("/api/v1/track", require("../routes/track.js"));
    this.app.use(
      "/api/v1/artist/lastreleases/",
      require("../routes/lastreleases.js")
    );
    this.app.all("*", (req, res) => {
      res.status(404)("Page not found");
    });
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Example app listening on port ${this.port}`);
    });
  }
}

module.exports = Server;
