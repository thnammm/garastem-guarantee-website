import fs from "fs";
import path from "path";
import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import serialize from "serialize-javascript";

import config from "server/config";

import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { App } from "components/admin-main/App";

const app = express();
app.enable("trust proxy");
app.use(morgan("common"));

app.use(express.static("public"));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.locals.serialize = serialize;

try {
  app.locals.gVars = require("../../.reactful.json");
} catch (err) {
  app.locals.gVars = {};
}

const initialData = {
  appName: "Quản lý"
};
const pageData = {
  title: `GARASTEM :: ${initialData.appName}`
};

app.get("/admin/*", async (req, res) => {
  const context = {};
  const app = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <App initialData={initialData} pageData={pageData} />
    </StaticRouter>
  );
  const indexFile = path.resolve("./views/index.ejs");
  fs.readFile(indexFile, "utf8", (err, data) => {
    if (err) {
      console.error("Something went wrong:", err);
      return res.status(500).send("Oops, better luck next time!");
    }

    if (context.status === 404) {
      res.status(404);
    }

    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
    );
  });
});

app.listen(config.port, config.host, () => {
  fs.writeFileSync(
    path.resolve(".reactful.json"),
    JSON.stringify(
      { ...app.locals.gVars, host: config.host, port: config.port },
      null,
      2
    )
  );

  console.info(`Running on ${config.host}:${config.port}...`);
});
