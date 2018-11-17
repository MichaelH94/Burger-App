const express = require('express');
const bodyParser = require('body-parser');
var methodOverride = require('method-override');
const path = require('path');


const app = express();
const port = process.env.PORT || 8080;


app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded({ extended: false }));

const exphbs = require('express-handlebars');
app.use(methodOverride('_method'));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require('./controllers/burgers_controller.js');

app.use('/', routes);

app.listen(port);
