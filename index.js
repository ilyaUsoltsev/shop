const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const errorsController = require('./controllers/errors');

//init the app
const app = express();

//using ejs
app.set('view engine', 'ejs');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop')
//bodyparser for fetching data
app.use(bodyParser.urlencoded({extended:false}));

//use static files for css
app.use(express.static(path.join(__dirname,'/public')));

//adding /admin to all admit routes and using adminroutes
app.use('/admin',adminRoutes); 
//using shop route
app.use(shopRoutes);

//catch all route 
app.use(errorsController.get404);


app.listen(3000,()=>{
    console.log('listening on 3000')
});

