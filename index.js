var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var request = require('request');
var wait=require('wait.for-es6');


var intents = require('./intents');

var personal = require('./personal');
var work = require('./work');
var education = require('./education');
var projects = require('./projects');
var misc = require('./misc');
var extra = require('./extra');



const WIT_TOKEN = "KFHLWHFODG2YGHDLT2EIBFUXQIR5JI2Y";

var token = "EAABlfCNZCn6UBAHmEn3Uwr4vnIhiD45temncnbr6kF7mdZCIgxlznLczQyPZAgEqdrUnZB6OUcIOay0ZC4R6amY7QMj1QMyFnOMZAGjHMkPZAirJDGSSr1aPZAU4H89JZCjJn5ARu5YsPO9RhzhI3oV2GEwYXZB9UsuZBZAGgQkWZCOeNvwZDZD"

var name_intents = [misc.what_is,misc.whos,misc.my_name];


app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());


// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');



app.get('/', function(req, res) {
  request({
    url: 'https://api.wit.ai/message?v=20141022&q=age',
    method: 'POST',
    headers: {
      'Authorization':'Bearer XPT6YJVPIIJKN73EOGMZSGFBL3DIJO2U'
    }
  }, function (error, response, body) {
    var intent = "none";
    var body = JSON.parse(response.body);
    var entities = body.outcomes[0].entities;
    if (Object.getOwnPropertyNames(entities).length != 0) {
      intent = entities.intent[0].value;
    }
    sender = "123";
    console.log(intents[intent]);
    //intents[intent](sender);
    res.render('pages/index');
  });
});

app.get('/webhook/', function(req, res) {
  if (req.query['hub.verify_token'] === 'pokemon_are_awesome') {
    res.send(req.query['hub.challenge']);
  }
  else{
    res.send('Error, wrong validation token');
  }
});


app.post('/webhook/', function (req, res) {
  messaging_events = req.body.entry[0].messaging;
  for (i = 0; i < messaging_events.length; i++) {
    event = req.body.entry[0].messaging[i];
    if (event.postback) {
      text = JSON.stringify(event.postback);
      sendTextMessage(sender, "Postback received: "+text.substring(0, 200), token);
      continue;
    }
    sender = event.sender.id;
    if (event.message && event.message.text) {
      text = event.message.text;
      // Handle a text message from this sender
      // if (text === 'Generic') {
      //   sendGenericMessage(sender);
      //   continue;
      // }
      var url = 'https://api.wit.ai/message?v=20141022&q='+text;
      request({
        url: url,
        method: 'POST',
        headers: {
          'Authorization':'Bearer XPT6YJVPIIJKN73EOGMZSGFBL3DIJO2U'
        }
      }, function(error, response, body) {
        var body = JSON.parse(response.body);
        var intent = "none";
        var entities = body.outcomes[0].entities;
        if (Object.getOwnPropertyNames(entities).length != 0) {
          if(entities.intent){
            intent = entities.intent[0].value;
            var flag = (name_intents.indexOf(intents[intents])>-1);
          }
        }
        //console.log(intents[intent]);
        if (intents[intent] === undefined){
            intents[intent] = misc.sorry;
        }
        else if (flag == true){
          if (entities.name){
            name = entities.name[0].value;
          }
          else{
            name = "";
          }
          console.log("call");
          intents[intent](sender,name);
        }
        // Answering what is questions
        // else if (intents[intent] == misc.what_is){
        //   if (entities.name){
        //     name = entities.name[0].value;
        //   }
        //   else{
        //     name = "";
        //   }
        //   console.log("call");
        //   intents[intent](sender,name);
        // }
        // // Answering what is questions
        // else if (intents[intent] == misc.whos){
        //   if (entities.name){
        //     name = entities.name[0].value;
        //   }
        //   else{
        //     name = "";
        //   }
        //   intents[intent](sender,name);
        // }
        // // Responding to my name is
        // else if (intents[intent] == misc.my_name){
        //     if (entities.name){
        //       name = entities.name[0].value;
        //     }
        //     else{
        //       name = "";
        //     }
        //     intents[intent](sender,name);
        // }
        // Responding to I live in
        else if (intents[intent] == misc.my_place){
            if (entities.place){
              place = entities.place[0].value;
            }
            else {
              place = "";
            }
            intents[intent](sender,place);
        }
        // Responding to does this use
        else if (intents[intent] == misc.platform_used){
            if (entities.tech){
              tech = entities.tech[0].value;
            }
            else {
              tech = "";
            }
            intents[intent](sender,tech);
        }
        // Responding to do you speak
        else if (intents[intent] == personal.languages_speak){
            if (entities.language){
              language = entities.language[0].value;
            }
            else {
              language = "";
            }
            intents[intent](sender,language);
        }
        // Responding to do you speak
        else if (intents[intent] == personal.favorites_intro){
            if (entities.favorite){
              favorite = entities.favorite[0].value;
            }
            else {
              favorite = "";
            }
            intents[intent](sender,favorite);
        }
        else{
          intents[intent](sender);
        }
        //sendTextMessage(sender, intents[intent]);
      });

    }
  }
  res.sendStatus(200);
});



app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
