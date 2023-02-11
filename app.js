const express = require("express");
const res = require("express/lib/response");
const app = express();
const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.type("html");
  res.send("<h1>Hello, World!</h1>");
});

app.listen(port, () =>
  console.log(`
Express started on http://localhost:${port};
Press Ctrl-C to terminat`)
);
