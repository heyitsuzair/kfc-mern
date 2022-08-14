const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
require("dotenv").config();

const productRoutes = require("./routes/ProductsRoute");
const catRoutes = require("./routes/CategoryRoute");

app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.use("/api/product", productRoutes);
app.use("/api/cat", catRoutes);

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connected");
  })
  .catch((error) => {
    console.log(error.message);
  });

const server = app.listen(process.env.PORT, () => {
  console.log("Connected");
});
