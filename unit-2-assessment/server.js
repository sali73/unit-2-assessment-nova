const express = require('express');
const app = express ();
const mongoose = require ('mongoose');
const ToDo = require('./models/toDo.js');
const db = mongoose.connection;
const methodOverride  = require('method-override');
const show = console.log

//Mongoose Connection
//___________________
const PORT = process.env.PORT || 3000
const MONGODB_URI= process.env.MONGODB_URI || 'mongodb://localhost/ToDo'
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));
db.on('open' , ()=>{});

//Middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

//Route
app.get('/', (req, res) => {
    res.send('To Do List')
  })

//index
app.get('/index',(req, res) => {
    ToDo.find({}, (error, allToDo) => {
        res.render('Index', {
            ToDo: allToDo,
        });
    });
});
// seed try to add data
// app.get('/index/seed', (req, res) => {
//     ToDo.create([
//         {
//            data: 'grapefruit',
            
//         },
//         {
//             data: 'grape',
        
//         },
        
//     ], (err, data) => {
//         res.redirect('/index');
//     })
// });


//DELETE ROUTE
app.delete('/index/:id', (req, res) => {
    ToDo.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect('/index');
    });
});


// New
app.get('/index', (req, res)=>{
    res.render('Index');
});
app.post('/index', (req, res) => {
    ToDo.create(req.body, (error, createdToDo) => {
        
        res.redirect('/index');
    });
});

app.listen(PORT , ()=> console.log('listening port:' , PORT))

