const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
// const { engine } = require('express-handlebars');

const errorController = require('./controllers/error');

const app = express();

// Using pug engine
// app.set('view engine', 'pug');
// app.set('views', 'views');

//Using handlebars engine
// app.engine('handlebars', engine());
// app.set('view engine', 'handlebars');
// app.set('views', 'views');

//Using ejs engine
app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000);
