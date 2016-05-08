var projects = {}

projects["projects"] = [
                          {
                            "name":"real time sentiment analysis on twitter",
                            "description":"Let's user select filters of their interest and then reports the realtime trends on those filters on twitter",
                            "start":"10/20/2014",
                            "end":"03/12/2015",
                            "languages_used":["python","tornado","hadoop","mongoDB","machine Learning","natural language processing"],
                            "toughest_challenge":"Maintaining a dynamic sized buffer to not lose any incoming tweets before processing them",
                            "learnt":["data Analysis","reporting","natural language processing","machine learning"],
                            "difficuly":6
                          },
                          {
                            "name":"handwritten digit recogniser",
                            "description":"Recognises images drawn on screen by the user",
                            "start":"13-03-2013",
                            "end":"18-05-2013",
                            "languages_used":["c++","ocr","opencv"],
                            "toughest_challenge":"Almost all of it",
                            "learnt":["image processing","optical character recognition"],
                            "difficuly":8
                          }
                       ]

projects["projects_intro"] = function (sender){

};

projects["projects_toughest"] = function (sender){

};

projects["projects_easy"] = function (sender){

};

projects["projects_latest"] = function (sender){

};

projects["projects_oldest"] = function (sender){

};

projects["projects_description"] = function (sender,text){

};

projects["projects_toughest_challenge"] = function (sender,text){

};

projects["projects_time_spent"] = function (sender,text){

};

projects["projects_languages"] = function (sender,text){

};

projects["projects_languages_used"] = function (sender,text){

};

projects["projects_learnt"] = function (sender,text){

};

projects["projects_when"] = function (sender,text){

};

module.exports = projects;
