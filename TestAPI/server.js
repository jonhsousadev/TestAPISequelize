const express = require("express");
const port = process.env.PORT || 5000;

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

require("./routes/rotasDaCidade")(app);
require("./routes/rotasDoCliente")(app);

app.listen(port, () => console.log(`Server started on ${port}`));