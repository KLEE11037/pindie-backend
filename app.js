const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const { cors } = require("./middlewares/cors");
const connectToDatabase = require("./database/connect");
const apiRouter = require("./routes/apiRouter");
const cookieParser = require("cookie-parser");
const pagesRouter = require("./routes/page");


const PORT = 3001;

const app = express();
connectToDatabase();
app.use(
  cors,
  cookieParser(),
  bodyParser.json(),
  express.static(path.join(__dirname, "public")),
  pagesRouter,
  apiRouter
);

app.listen(PORT, () => {
  // Если всё работает, консоль покажет, какой порт приложение слушает
  console.log(`App listening on port ${PORT}`);
});
