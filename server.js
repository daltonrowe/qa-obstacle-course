import * as fs from "node:fs";
import express from "express";
const app = express();

app.use(express.text());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  }),
);

const portFlagIndex = process.argv.findIndex((item) => item === "--port");
const port = portFlagIndex !== -1 ? process.argv[portFlagIndex + 1] : 3000;

app.use(express.static("public", { extensions: ["html"] }));

const files = fs.readdirSync("api");
for (const file of files) {
  const { default: route } = await import(`./api/${file}`);
  const level = file.split(".")[0];
  app.use(`/api/${level}`, route);
}

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
