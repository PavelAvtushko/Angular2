// const path = require('path');
const express = require ('express');
const bodyParser = require('body-parser');
const app = express();
const tasksController = require('./server/controllers/tasksController');
const db = require('./server/db');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('./dist'));

//returns a new collection from the database 
app.get('/tasks', tasksController.getAllTasks);

//checks an user's personal data and gives access
app.post('/tasks', tasksController.logUser);

//pushs a new data into the database 
app.put('/tasks', tasksController.putNewTask);

//accepts an id of task and removes this task from the database
app.delete('/tasks/:id', tasksController.deleteById);

//removes an user's collection
app.delete('/tasks', tasksController.deleteAllTasks);

//accepts an id of task (with new position data) and updates the database
app.put('/tasks/:id', tasksController.updateTask);

//TODO  - work with graphic data
app.post('/tasks/photo', tasksController.addPhoto);

db.connect('mongodb://pasha:pashawunderlist@ds127190.mlab.com:27190/wunderlist',
    function(err){
        if(err) {
            return console.log(err);
        }
    app.listen(3000, function(){
        console.log('connection is ready...');
    });
});