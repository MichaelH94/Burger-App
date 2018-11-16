const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const routes = require('./controllers/burgers_controller.js');

const port = process.env.Port || 3306;
const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({
    extended: false
}));

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view enginge", "handlebars");


app.use('/', routes);
app.listen(port);
