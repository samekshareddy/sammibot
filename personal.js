var messaging = require('./messaging');

var personal = {}

//bio data
personal['name'] = "G Akshay Kulkarni";
personal['dob'] = "04/21/1993";
personal['birth_place'] = "Chennai, India" ;
personal['fathers_name'] = "G Suresh Kulkarni";
personal['mothers_name'] = "Uma S Kulkarni";
personal['gender'] = "Male";
personal['place_residence'] = "Hyderabad, India";
personal['nationality'] = "India";
personal['countries_visited'] = ["Hong Kong","India","South Korea"];
personal['countries_lived_in'] = ["India"];
personal['siblings'] = [{"name":"Arpita Kulkarni","relation":"sister"}];


personal['name_intro'] = function (sender){
                            messaging['text'](sender,"My name is " + personal['name']);
                         };

personal['dob_intro'] = function (sender){
                             messaging['text'](sender,"My birthdate is " + personal['dob']);
                          };

personal['birthplace_intro'] = function (sender){
                              messaging['text'](sender,"I was born in " + personal['birth_place']);
                           };

personal['fathers_name_intro'] = function (sender){
                             messaging['text'](sender,"My father's name is " + personal['fathers_name']);
                          };

personal['mothers_name_intro'] = function (sender){
                            messaging['text'](sender,"My mother's name is " + personal['mothers_name']);
                         };

personal['gender_intro'] = function (sender){
                             messaging['text'](sender,"I am a " + personal['gender']);
                          };

personal['place_residence_intro'] = function (sender){
                              messaging['text'](sender,"I live in " + personal['place_residence']);
                           };

personal['nationality_intro'] = function (sender){
                             messaging['text'](sender,"I am from " + personal['nationality']);
                          };

personal['countries_visited_intro'] = function (sender){
                            var visited =  "I have visited";
                            for (var i=0;i<personal["countries_visited"].length;i++)
                            {
                              if (i==0){
                                visited += "  "+ personal["countries_visited"][i];
                              }
                              else{
                                visited += " and " + personal["countries_visited"][i];
                              }
                            }
                            messaging['text'](sender,visited);
                         };

personal['countries_lived_in_intro'] = function (sender){
                            var lived =  "I have lived in ";
                            for (var i=0;i<personal["countries_lived_in"].length;i++)
                            {
                              if (i==0){
                                lived += "  "+ personal["countries_lived_in"][i];
                              }
                              else{
                                lived += " and " + personal["countries_lived_in"][i];
                              }
                            }
                            messaging['text'](sender,lived);
                          };

personal['siblings_intro'] = function (sender){
                              if (personal["siblings"].length>0){
                                var result = "Yes, I have siblings.";
                                for (var i=0;i<personal["siblings"].length;i++){
                                  result += "I have a " + personal["siblings"][i]["relation"] + " called " + personal["siblings"][i]["name"];
                                }
                                messaging['text'](sender,result);
                              }
                              else{
                                messaging['text'](sender,"No, I don't have siblings");
                              }
                           };

personal['age'] = function (sender){
                    var birthdate = new Date(personal["dob"]);
                    var current_date = new Date();
                    var timeDiff = Math.abs(current_date.getTime() - birthdate.getTime());
                    var diffYears = Math.floor(timeDiff / (1000 * 3600 * 24 * 365));
                    messaging['text'](sender,"I am " + diffYears + " years old.");
};


//contact info
personal['email'] = "akshaykulkarni.2104@gmail.com";
personal['ph_no'] = "9505147139";
personal['facebook'] = "https://www.facebook.com/GanadiniAkshay";
personal['twitter'] = "@akshay2104";
personal['linkedin'] = "https://in.linkedin.com/in/ganadiniakshay";
personal['website'] = "none";
personal['github'] = "https://github.com/GanadiniAkshay";


personal["email_intro"] = function (sender){
                            messaging['text'](sender,'My email is ' + personal["email"]);
};

personal["facebook_intro"] = function (sender){
                            messaging['text'](sender,'My facebook link is ' + personal["facebook"]);
};

personal["twitter_intro"] = function (sender){
                            messaging['text'](sender,'My twitter handle is ' + personal["twitter"]);
};

personal["linkedin_intro"] = function (sender){
                            messaging['text'](sender,'My linkedin link is ' + personal["linkedin"]);
};


personal["github_intro"] = function (sender){
                            messaging['text'](sender,'My github link is ' + personal["github"]);
};

//general info
personal['interests'] = ["machine learning","natural language processing","space technologies","startups","Game of Thrones"];
personal['hobbies'] = ["reading books","watching tv shows","playing football"];
personal['strengths'] = ["programming","public speaking","team management"];
personal['weaknesses'] = ["lazy","bad time management"];
personal['languages'] = ["hindi","telugu","kannada","english"];
personal['favorites'] = {"color":"red","car":"tesla","singer":"Ed Sheeran","music":"Soul,Pop and EDM"};


personal['interests_intro'] = function (sender){
                                  var interests =  "I am interested in ";
                                  for (var i=0;i<personal["interests"].length;i++)
                                  {
                                    if (i==0){
                                      interests += personal["interests"][i];
                                    }
                                    else{
                                      interests += " and " + personal["interests"][i];
                                    }
                                  }
                                  messaging['text'](sender,interests);
};


personal['hobbies_intro'] = function (sender){
                                  var hobbies =  "My hobbies are ";
                                  for (var i=0;i<personal["hobbies"].length;i++)
                                  {
                                    if (i==0){
                                      hobbies += personal["hobbies"][i];
                                    }
                                    else{
                                      hobbies += " and " + personal["hobbies"][i];
                                    }
                                  }
                                  messaging['text'](sender,hobbies);
};


personal['strengths_intro'] = function (sender){
                                  var strengths =  "My strengths are ";
                                  for (var i=0;i<personal["strengths"].length;i++)
                                  {
                                    if (i==0){
                                      strengths += personal["strengths"][i];
                                    }
                                    else{
                                      strengths += " and " + personal["strengths"][i];
                                    }
                                  }
                                  messaging['text'](sender,strengths);
};


personal['weaknesses_intro'] = function (sender){
                                  var weaknesses =  "My weaknesses are ";
                                  for (var i=0;i<personal["weaknesses"].length;i++)
                                  {
                                    if (i==0){
                                      weaknesses += personal["weaknesses"][i];
                                    }
                                    else{
                                      weaknesses += " and " + personal["weaknesses"][i];
                                    }
                                  }
                                  messaging['text'](sender,weaknesses);
};


personal['languages_intro'] = function (sender){
                                  var languages =  "I speak and understand ";
                                  for (var i=0;i<personal["languages"].length;i++)
                                  {
                                    if (i==0){
                                      languages += personal["languages"][i];
                                    }
                                    else{
                                      languages += " and " + personal["languages"][i];
                                    }
                                  }
                                  messaging['text'](sender,languages);
};


personal['languages_speak'] = function (sender,language){
                                  language = language.toLowerCase();
                                  var flag = 0;
                                  for (var i=0;i<personal["languages"].length;i++)
                                  {
                                    if (language===personal["languages"][i]){
                                      messaging['text'](sender,"Yes, I speak " + language);
                                      flag = 1;
                                    }
                                  }
                                  if (flag === 0){
                                    messaging['text'](sender,"No, I don't speak " + language);
                                  }
};

personal['favorites_intro'] = function (sender,favorite){
                                  favorite = favorite.toLowerCase();
                                  if (personal["favorites"][favorite]){
                                    messaging['text'](sender,"My favorite " + favorite + " is " + personal["favorites"][favorite]);
                                  }else {
                                    messaging['text'](sender,"I don't really have a favorite " + favorite);
                                  }
};

//description
personal["description"] = "I am a computer science graduate. I currently work at Microsoft as a Software Engineer. I am interested in machine learning, especially in Natural Language.";
personal["aspiration"] = "I always figure a way out to get things done, even if the odds are against me. In fact having odds against me motivates me even more. You can email me and I can tell you about my experiences to substantiate these claims. :)";

personal["description_intro"] = function (sender){
                                  messaging["text"](sender,personal["description"]);
};

personal["aspiration_intro"] = function (sender){
                                  messaging["text"](sender,personal["aspiration"]);
};

module.exports = personal;
