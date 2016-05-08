var messaging = require('./messaging');

var misc = {}

misc['languages'] = ["javascript"];
misc["technologies"] = ["node.js","wit.ai","machine learning"];
misc["sorries"] =  ["Hmmm...I didn't get that","Sorry, couldn't understand it","I didn't get what you said","Pardon me, I didn't understand"];


misc["blank"]    = function (sender){
                      console.log("I am a waste");
                   };

misc["hi"]       = function (sender){
                      messaging['text'](sender,'Hi!');
                   };

misc["wish_gm"] = function (sender){
                      messaging['text'](sender,'Good Morning :)');
                   };

misc["wish_ga"] = function (sender){
                     messaging['text'](sender,'Good Afternoon :)');
                  };

misc["wish_ge"] = function (sender){
                     messaging['text'](sender,'Good Evening :)');
                  };

misc["wish_gn"] = function (sender){
                     messaging['text'](sender,'Good Night :)');
                  };

misc["whats_up"] = function (sender){
                      messaging['text'](sender,'Nothing much. Just talking to awesome people like you.');
                  };

misc["sorry"]    = function (sender){
                     var sorry_msg = misc["sorries"][Math.floor(Math.random()*misc["sorries"].length)]
                     messaging['text'](sender,sorry_msg);
};

misc["what_is"]  = function(sender,query){
                      messaging['super_text'](sender,query);
};

misc["whos"]  = function(sender,query){
                      messaging['super_text'](sender,query);
};

misc["bye"] = function(sender){
                    messaging['text'](sender,'Goodbye, Have a nice day. Looking forward to talk to you again :)');
};

misc["smile"] = function(sender){
                    messaging['text'](sender,':)');
};

misc["platform"] = function (sender){
                      var result = "This bot was built using"
                      for (var i=0;i<misc["technologies"].length;i++)
                      {
                        if (i==0){
                          result += "  "+ misc['technologies'][i];
                        }
                        else{
                          result += " and " + misc["technologies"][i];
                        }
                      }
                      messaging['text'](sender,result);
                   };

misc["bot"] = function (sender){
                messaging['text'](sender,"It's me the bot. If you think I am human I am flattered ;)");
};

misc["exist"] = function (sender){
                  messaging['text'](sender,"Because the world needs my awesomness ;)");
};

misc["my_name"] = function (sender,name){
                    messaging['text'](sender,"Nice to meet you " + name);
};

misc["my_place"] = function (sender,place){
                    messaging['text'](sender,"That's cool! I would like to visit "+ place +" sometime.");
};

misc["platform_used"] = function (sender,tech){
                          tech = tech.toLowerCase();
                          flag = false;
                          flag = (misc["technologies"].indexOf(tech) > -1);
                          if (flag == false){
                            flag = (misc["languages"].indexOf(tech) > -1);
                          }
                          if (flag == false){
                            messaging['text'](sender,"No");
                          }else{
                            messaging['text'](sender,"Yes");
                          }
};

misc["think"] = function (sender){
                  messaging['text'](sender,"I am too busy being awesome. No time to think about it");
};

misc["help"]  = function (sender){
                  messaging['text'](sender,"You can ask me about all my resume stuff. Projects, Work Experience, education, strengths and weakness etc. Ask it naturally,like you would ask a human :)");
};

module.exports = misc;
