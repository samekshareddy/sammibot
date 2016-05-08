var personal = require('./personal');
var work = require('./work');
var education = require('./education');
var projects = require('./projects');
var misc = require('./misc');
var extra = require('./extra');

var intents = {}

//General manners
intents["hi"] = misc.hi;
intents["good_morning"] = misc.wish_gm;
intents["good_afternoon"] = misc.wish_ga;
intents["good_evening"] = misc.wish_ge;
intents["good_night"] = misc.wish_gn;
intents["whats_up"] = misc.whats_up;
intents["what_is"] = misc.what_is;
intents["whos"] = misc.whos;
intents["think"] = misc.think;
intents["bye"] = misc.bye;
intents["smile"] = misc.smile;
intents["platform"] = misc.platform;
intents["bot"] = misc.bot;
intents["exist"] = misc.exist;
intents["my_name"] = misc.my_name;
intents["my_place"] = misc.my_place;
intents["platform_used"] = misc.platform_used;
intents["help"] = misc.help;


//Personal Info
intents["name_intro"] = personal.name_intro;
intents["dob_intro"]  = personal.dob_intro;
intents["birthplace"] = personal.birthplace_intro;
intents["father"] = personal.fathers_name_intro;
intents["mother"] = personal.mothers_name_intro;
intents["gender"] = personal.gender_intro;
intents["residence"] = personal.place_residence_intro;
intents["nation"] = personal.nationality_intro;
intents["countries_lived"] = personal.countries_lived_in_intro;
intents["countries_visited"] = personal.countries_visited_intro;
intents["siblings"] = personal.siblings_intro;
intents["age_intro"] = personal.age;


//Personal Contacts
intents["email"] = personal.email_intro;
intents["phone"] = personal.phone_intro;
intents["facebook"] = personal.facebook_intro;
intents["linkedin"] = personal.linkedin_intro;
intents["twitter"] = personal.twitter_intro;
intents["github"] = personal.github_intro;


//Personal preferences
intents["interests"] = personal.interests_intro;
intents["hobbies"] = personal.hobbies_intro;
intents["strengths"] = personal.strengths_intro;
intents["weakness"] = personal.weaknesses_intro;
intents["speak"] = personal.languages_intro;
intents["speak_test"] = personal.languages_speak;
intents["favorites"] = personal.favorites_intro;

//Personal descriptions
intents["self_intro"] = personal.description_intro;
intents["aspire"] = personal.aspiration_intro;

//Extra Curriculars
intents["extra"] = extra.extra_intro;
intents["extra_where"] = extra.extra_where;
intents["extra_when"] = extra.extra_when;
intents["extra_long"] = extra.extra_long;
intents["extra_challenges"] = extra.extra_challenges;
intents["extra_learnt"] = extra.extra_learnt;

//projects
intents["projects_intro"] = projects.projects_intro;
intents["projects_toughest"] = projects.projects_toughest;
intents["projects_easy"] = projects.projects_easy;
intents["projects_latest"] = projects.projects_latest;
intents["projects_oldest"] = projects.projects_oldest;
intents["projects_description"] = projects.projects_description;
intents["projects_toughest_challenge"] = projects.projects_toughest_challenge;
intents["projects_languages"] = projects.projects_languages;
intents["projects_languages_used"] = projects.projects_languages_used;
intents["projects_time_spent"] = projects.projects_time_spent;
intents["projects_learnt"] = projects.projects_learnt;
intents["projects_when"] = projects.projects_when;

//education
intents["education_colleges"] = education.education_colleges;
intents["education_qualifications"] = education.education_qualifications;
intents["education_certificates"] = education.education_certificates;
intents["education_awards"] = education.education_awards;
intents["education_courses"] = education.education_courses;
intents["education_courses_colleges"] = education.education_courses_colleges;
intents["education_grade"] = education.education_grade;
intents["education_time"] = education.education_time;
intents["education_long"] = education.education_long;
intents["education_skills"] = education.education_skills;
intents["education_skills_learnt"] = education.education_skills_learnt;
intents["education_codinglangs"] = education.education_codinglangs;
intents["education_codinglangs_used"] = education.education_codinglangs_used;
intents["education_technologies"] = education.education_technologies;
intents["education_technologies_used"] = education.education_technologies_used;

//work
intents["job_intro"] = work.job_intro;
intents["job_time"] = work.job_time;
intents["job_long"] = work.job_long;
intents["job_experience"] = work.job_experience;
intents["job_projects"] = work.job_projects;
intents["job_projects_description"] = work.job_projects_description;
intents["job_projects_impact"] = work.job_projects_impact;

module.exports = intents;
