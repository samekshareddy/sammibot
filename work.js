var work = {}

work['Jobs'] =[
                {
                  "job_role":"Software Engineer",
                  "company":"Microsoft",
                  "start" :"15-06-2015",
                  "end"   :"none",
                  "projects":[
                                {
                                  "name":"Optimizing ETL Process",
                                  "description":"optimized the total runtime of the total ETL by generating dynamic dependency tree for the stored procedures",
                                  "impact_created":"brought the total runtime down by 30 mins"
                                },
                                {
                                  "name":"Mentoring CS50AP teachers",
                                  "description":"mentored high school teachers in US and Canada for CS50AP",
                                  "impact_created":"helped improve CS education in high schools in North America"
                                },
                                {
                                  "name":"Telemetry",
                                  "description":"Created stored procedures to capture telemetry data and created reports in PowerBi. Integrated yammer with the live monitoring site to improve discussion on issues and bugs",
                                  "impact_created":"Helped get a better understanding of how the system is performing and quicker and easier bug fixes"
                                }
                             ],
                  "experience":"It's been a great learning experience. I learnt new technologies and have gained a better understanding of the Sales Lifecycle"
                },
                {
                  "job_role":"Web Developer Intern",
                  "company":"Juma",
                  "start":"15-11-2013",
                  "end":"21-03-2014",
                  "projects":[
                                {
                                  "name":"REST API developement",
                                  "description":"built a REST API to share product data with partners",
                                  "impact_created":"sharing data with partner websites brought in more visitors to the site and more sales"
                                },
                                {
                                  "name":"Automated product data input",
                                  "description":"developed python scripts to automate entering product data from excel sheets",
                                  "impact_created":"made it quicker and easier to upload product catalogs"
                                }
                             ],
                  "experience":"I was the only tech person in the company, so it was extremely challenging but a lot of fun."
                }
              ]


work["job_intro"] = function (sender){

};

work["job_time"] = function (sender,text){

};

work["job_long"] = function (sender,text){

};

work["job_experience"] = function (sender,text){

};

work["job_projects"] = function (sender,text){

};

work["job_projects_description"] = function (sender,text){

};

work["job_projects_impact"] = function (sender,text){

};


module.exports = work;
