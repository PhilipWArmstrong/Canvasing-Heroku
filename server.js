const express = require('express');
const app = express();
const mongoose = require('mongoose');
const MONGODB_URI = process.env.MONGODB_URI||'mongodb://localhost:27017/canvasing'
const methodOverride = require('method-override');
const voterController = require('./controllers/voters.js');
const Port = process.env.PORT || 3002;



app.use(methodOverride('_method'))
app.use(express.urlencoded({extended:false}));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());


//////////////////////////////////////////////////
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

// where routes would have been
app.use('/canvasing', voterController); 

app.listen(Port, () => {
    console.log('this is working');
});