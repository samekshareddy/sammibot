var request = require('request');

var token = "EAABlfCNZCn6UBAHmEn3Uwr4vnIhiD45temncnbr6kF7mdZCIgxlznLczQyPZAgEqdrUnZB6OUcIOay0ZC4R6amY7QMj1QMyFnOMZAGjHMkPZAirJDGSSr1aPZAU4H89JZCjJn5ARu5YsPO9RhzhI3oV2GEwYXZB9UsuZBZAGgQkWZCOeNvwZDZD"

var messaging = {}

messaging['text']=function (sender, text) {
                    messageData = {
                      text:text
                    }
                    request({
                      url: 'https://graph.facebook.com/v2.6/me/messages',
                      qs: {access_token:token},
                      method: 'POST',
                      json: {
                        recipient: {id:sender},
                        message: messageData,
                      }
                    }, function(error, response, body) {
                      if (error) {
                        console.log('Error sending message: ', error);
                      } else if (response.body.error) {
                        console.log('Error: ', response.body.error);
                      }
                    });
                  }


messaging['super_text']=function (sender,text) {
  var url = "http://google.com/search?q=" + text;
  messageData = {
    "attachment": {
      "type": "template",
      "payload": {
        "template_type": "generic",
        "elements": [
                      {
                        "title": "Google search",
                        "subtitle": "I hope this answers your query",
                        "image_url": "http://i.imgur.com/3uQ8sS0.jpg?1",
                        "buttons": [{
                                      "type": "web_url",
                                      "url": url,
                                      "title": "Web url"
                                  }],
                   }
                 ]
      }
    }
  };
  request({
    url: 'https://graph.facebook.com/v2.6/me/messages',
    qs: {access_token:token},
    method: 'POST',
    json: {
      recipient: {id:sender},
      message: messageData,
    }
  }, function(error, response, body) {
    if (error) {
      console.log('Error sending message: ', error);
    } else if (response.body.error) {
      console.log('Error: ', response.body.error);
    }
  });
}



module.exports = messaging;
