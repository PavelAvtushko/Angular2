// const path = require('path');
const express = require ('express');
const bodyParser = require('body-parser');
const app = express();
//const tasksController = require('./server/controllers/tasksController');
const db = require('./server/db');

const data = [
            {
                "city": "Karachi Pakistan (27m)",
                "population": "27"
            },{
                "city": "Shanghai China (24m)",
                "population": "24"

            },{
                "city": "Beijing China (21m)",
                "population": "21"

            },{
                "city": "Delhi India (16m)",
                "population": "16"
            },{
                "city": "Lagos Nigeria (17m)",
                "population": "17"

            },{
                "city": "Dhaka Bangladesh (14m)",
                "population": "14"

            },{
                "city": "Guangzhou China (13m)",
                "population": "13"
            },{
                "city": "Istanbul Turkey (15m)",
                "population": "15"
            }
        ];


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('./dist'));

//returns a new collection from the database 
//app.get('/tasks', tasksController.getAllTasks);

app.get('/chartData', function(req, res) {
    setTimeout(()=>res.send(data), 1500);
});

//checks an user's personal data and gives access
//app.post('/tasks', tasksController.logUser);

//pushs a new data into the database 
//app.put('/tasks', tasksController.putNewTask);

//accepts an id of task and removes this task from the database
//app.delete('/tasks/:id', tasksController.deleteById);

//removes an user's collection
//app.delete('/tasks', tasksController.deleteAllTasks);

//accepts an id of task (with new position data) and updates the database
//app.put('/tasks/:id', tasksController.updateTask);

//TODO  - work with graphic data
//app.post('/tasks/photo', tasksController.addPhoto);

db.connect('mongodb://pasha:pashawunderlist@ds127190.mlab.com:27190/wunderlist',
    function(err){
        if(err) {
            return console.log(err);
        }
    app.listen(3000, function(){
        console.log('connection is ready...');
    });
});
