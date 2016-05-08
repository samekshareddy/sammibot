var messaging = require('./messaging');

var extra = {}

extra['extras'] = [
                    {
                      "name":"editor-in-chief transcendent (college newspaper)",
                      "place":"CBIT, Hyderabad",
                      "start":"21-02-2013",
                      "end":"21-04-2015",
                      "challenges":"Getting people under you to work for free and motivating them",
                      "learnt":["Leadership skills","team management"]
                    },
                    {
                      "name":"under secretary general cbit model united nations",
                      "place":"CBIT, Hyderabad",
                      "start":"21-02-2013",
                      "end":"21-04-2015",
                      "challenges":"Getting people under you to work for free and motivating them",
                      "learnt":["Leadership skills","team management"]
                    }
                  ]

extra['extra_intro'] = function (sender){
                          var result = "I was ";
                          for (var i=0;i<extra["extras"].length;i++){
                            if (i == 0){
                              result += extra["extras"][i]["name"];
                            }else{
                              result += " and " + extra["extras"][i]["name"];
                            }
                          }
                          messaging["text"](sender,result);
};

extra['extra_where'] = function (sender,text){
                          var result = "I don't know what you mean by " + text;
                          text = text.toLowerCase();
                          texts = text.split(" ");
                          for (var i=0;i<extra['extras'].length;i++){
                            for(var j=0;j<texts.length;j++){
                              if (extra['extras'][i]['name'].indexOf(texts[j])>-1){
                                result = "That was in " + extra['extras'][i]['place'];
                              }
                            }
                          }
                          messaging['text'](sender,result);
};

extra['extra_when'] = function (sender,text){

};

extra['extra_long'] = function (sender,text){

};

extra['extra_challenges'] = function (sender,text){

};

extra['extra_learnt'] = function (sender,text){

};

module.exports = extra;
