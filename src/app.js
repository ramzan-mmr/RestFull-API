const express = require("express");
require("./DBConnection/conn");
const employee = require("./Routers/employeeRoute");
const app = express();
const port = process.env.PORT || 8000;

//Insert data in user collection and getting from API and
app.use(express.json());
// 3: we need to register our router 
app.use(employee);
app.listen(port, () => {
    console.log(`connection is setup at ${port}`);
});

