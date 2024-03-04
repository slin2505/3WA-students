import chalk from "chalk";
import fs from "fs";
import http from "http";
import axios from "axios";

console.log(chalk.blue("Marianne"));
console.log(chalk.red("Hugo"));
console.log(chalk.yellow("Jason"));
console.log(chalk.green("Nathan"));

fs.writeFile("dummyfile.txt", "Je suis un fichier de test", (err) => {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log("dummy written with success");
    return;
  }
});

fs.readFile("dummyfile.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
  return;
});

fs.readFile("./index.html", function (err, html) {
  if (err) {
    throw err;
  }
  http
    .createServer(function (request, response) {
      response.writeHeader(200, { "Content-Type": "text/html" });
      response.write(html);
      response.end();
    })
    .listen(8000);
});

axios.get("https://www.google.com").then(
  (response) => {
    fs.writeFile("google.html", response.data, (err) => {
      if (err) {
        console.warn(err);
        return;
      } else {
        console.log("file written with success");
        return;
      }
    });
  },
  (err) => {
    console.warn(err);
  }
);
