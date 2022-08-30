const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
require("dotenv").config({ path: "./.env.local" });

const productRoutes = require("./routes/ProductsRoute");
const catRoutes = require("./routes/CategoryRoute");
const addonRoutes = require("./routes/AddonRoute");
const softdrinkRoutes = require("./routes/SoftdrinkRoute");
const favRoutes = require("./routes/FavRoutes");
const locationRoutes = require("./routes/LocationRoute");
const orderRoutes = require("./routes/OrderRoute");

app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.use("/api/product", productRoutes);
app.use("/api/cat", catRoutes);
app.use("/api/addon", addonRoutes);
app.use("/api/softdrink", softdrinkRoutes);
app.use("/api/fav", favRoutes);
app.use("/api/location", locationRoutes);
app.use("/api/order", orderRoutes);

app.use(express.static(__dirname + "/build"));

app.get("*", function (req, res) {
  res.sendfile(__dirname + "/build/index.html");
});

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

const server = app.listen(process.env.PORT || 5000, () => {
  console.log("Connected");
});
