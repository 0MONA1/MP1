const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const port = process.env.PORT || 3000;

// const staticPath = path.join(__dirname, "../public");
const template__path = path.join(__dirname, "../templates/views");
const partial__path = path.join(__dirname, "../templates/partials");

app.set('view engine', 'hbs');
app.set('views', template__path);
hbs.registerPartials(partial__path);
app.use('../public', express.static('public'))

// app.use(express.static(path.join(__dirname, '../public')));
//routing
app.get('/', (req, res)=>{
    res.render('index');
})
app.get('/about', (req, res)=>{
    // console.log('now working')
    res.render('about');
})
app.get('*', (req,res)=>{
    res.render('404error');
})

//listening
app.listen(port, ()=>{
    console.log(`listening to the port ${port}`);
 });
