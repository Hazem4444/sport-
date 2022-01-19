// import express module
const express = require('express');
//import match routes
const matchRoutes = require('./routes/match-routes');
//import user routes
const userRoutes = require('./routes/user-routes');
// import axios module 
const axios = require('axios');

// import body-parser module
const bodyParser = require('body-parser');
const req = require('express/lib/request');
const { application } = require('express');
const res = require('express/lib/response');


//create express application 
const app = express();


//configure body parser
//send response with json format
app.use(bodyParser.json());
//parse objectifs sended from fe
app.use(bodyParser.urlencoded({ extended: true }));


// Security configuration
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
});

//Data base configuration
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/sportDB');

//import user model 
const User = require('./models/user');
const { LOG_LOG } = require('karma/lib/constants');
const user = require('./models/user');




app.get("/teams/:id", (req, res) => {
    console.log('Here into business logic of get teams by id', req.params.id);
    let findedTeams;
    for (let i = 0; i < Teams.length; i++) {
        if (Teams[i].id == req.params.id) {
            findedTeams = Teams[i];
            break
        }
    }
    res.status(200).json({
        result: findedTeams
    });
});

app.get("/players/:id", (req, res) => {
    console.log('Here into business logic of get players by id', req.params.id);
    let findedPlayer;
    for (let i = 0; i < players.length; i++) {
        if (players[i].id == req.params.id) {
            findedPlayer = players[i];
            break
        }
    }
    res.status(200).json({
        result: findedPlayer
    });
});

// business logic to get all players 
app.get("/players", (req, res) => {
    console.log('Here into business logic of get all players');

    // players === DB
    // let players = [
    //     { id: 1, post: "p1", avatar: "assets/images/img_1.jpg", name: "Messi", age: '29ans', nbr: ' 1', note: '1' },
    //     { id: 2, post: "p2", avatar: "assets/images/img_2.jpg", name: "Hannibal", age: '30ans', nbr: ' 3', note: '9' },
    //     { id: 3, post: "p3", avatar: "assets/images/img_3.jpg", name: "Khnissi", age: '39ans', nbr: ' 5', note: '4' },
    //     { id: 4, post: "p4", avatar: "assets/images/img_1.jpg", name: "Chaaleli", age: '32ans', nbr: ' 8', note: '10' }


    // ]
    res.status(200).json({
        result: players
    });
})
// business logic get all teams
app.get("/teams", (req, res) => {
    console.log('Here into business logic of get all teams');

    // teams === DB
    // let Teams = [
    //     {id:1, Logo:"assets/images/logo_1.png", TeamName:"Coupe d'Arabe", Foundation:'1998', Country:'Country 1', Date:"15:30 AM GMT+0"},
    //     {id:2, Logo:"assets/images/logo_2.png", TeamName:"Coupe de Monde", Foundation:'1980', Country:'Country 2', Date:"9:00 AM GMT+0"},
    //     {id:3, Logo:"assets/images/logo_3.png", TeamName:"Coupe d'Afrique", Foundation:'1965', Country:'Country 3', Date:"8:30 AM GMT+0"},
    //     {id:4, Logo:"assets/images/logo_4.png", TeamName:"Coupe d'Arabe", Foundation:'1902', Country:'Country 4', Date:"11:30 AM GMT+0"}

    // ]

    res.status(200).json({
        result: Teams
    });
})

//business mogic to get all users
app.get("/users", (req, res) => {
    console.log('Here into business logicto get all users ',);

    // users === DB
    //    let users = [
    //     { id: 1, fname: "Ameni", lname: "Hraghi", email: "Hraghi@gmail.com", pwd: "123" },
    //     { id: 2, fname: "Themri", lname: "Raja", email: "Raja@gmail.com", pwd: "1234" },
    //     { id: 3, fname: "Hraghi", lname: "Hanen", email: "hanen@gmail.com", pwd: "1122" },

    //   ]
    res.status(200).json({
        result: users
    })

});

//business logic to get user profile by id 
app.get("/users/:id", (req, res) => {
    console.log('here into business logic to get user profile', req.params.id);
    let findedUser = users.find((obj) => {
        return obj.id == req.params.id
    });
    res.status(200).json({
        result: findedUser,
        message: 'here findeduser'
    })

})

//business logic to calculate imc
app.post("/players/status", (req, res) => {

    console.log('Here player values', req.body);
    let height = req.body.height;
    let weight = req.body.weight;
    let imc = weight / (height * height * 0.0001);
    console.log("IMC", imc);
    let message;
    if (imc <= 18.5) {
        message = "Insuffisance"
    }
    else if (18.5 < imc <= 24.9) {
        message = "Normal"
    }
    else if (25.0 <= imc <= 29.9) {
        message = "Sur Poids"
    }
    else {
        message = "obésité"
    }

    res.status(200).json({
        message: message,
        imc: imc
    })



})

// business logic to post login
// app.post("/users/login", (req, res) => {

//     console.log('Here player values', req.body);
//     let email = req.body.email;
//     let pwd = req.body.pwd;
//     let result;
//     for (let i = 0; i < users.length; i++) {

//         if (email == users[i].email && pwd == users[i].pwd) {
//             result = users[i];
//             break;
//         }
//     }


//     res.status(200).json({
//         result: result,

//     })
// })

// bus to signup
// app.post("/users/signup", (req, res) => {

//     console.log('Here player values', req.body);
//     users.push(req.body)

//     res.status(200).json({
//         message: "added succes"

//     })
// })

// edit player
app.put("/players/:id", (req, res) => {
    console.log('Here into business logic players by id', req.params.id);
    console.log('Here into business logic players by obj ', req.body);
    for (let i = 0; i < players.length; i++) {
        if (players[i].id == req.params.id) {
            players[i] = req.body;
            break;
        }
    }
    res.status(200).json({
        message: 'Edited with succes'
    });
});

// business logic to get articles
app.get("/articles", (req, res) => {

    console.log('Here All articles',);

    res.status(200).json({
        result: articles,
        message: 'here all articles'

    })
});
// business logic to aad article 
app.post("/articles", (req, res) => {
    console.log('here into add article', req.body)
    articles.push(req.body);
    res.status(200).json({
        message: 'Added with succes'

    })

});
// business logic to get article by id
app.get("/articles/:id", (req, res) => {
    console.log('Here into business logic of get article by id', req.params.id);
    let findedArticle;
    for (let i = 0; i < articles.length; i++) {
        if (players[i].id == req.params.id) {
            findedArticle = articles[i];
            break;
        }
    }
    res.status(200).json({
        result: findedArticle,
        message: 'here findedArticle'


    });
});
//business logic to edit article
app.put("/articles/:id", (req, res) => {
    console.log('Here into business logic edit articles by id', req.params.id);
    console.log('Here into business logic edit articles by obj ', req.body);
    for (let i = 0; i < articles.length; i++) {
        if (articles[i].id == req.params.id) {
            articles[i] = req.body;
            break;
        }
    }
    res.status(200).json({
        message: 'Edited with succes'
    });
});

// business logic to aad article 
app.post("/articles", (req, res) => {
    console.log('here into add article', req.body)
    articles.push(req.body);
    res.status(200).json({
        message: 'Added with succes'

    })

});




    app.use('/api/matches', matchRoutes);
    app.use('/api/users', userRoutes);
    // exporter
    module.exports = app;
