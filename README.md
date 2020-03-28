# Back-end_Pattern-for-RESTful-API
This pattern was written for the site with many articles, like Wikipedia.

REpresentational State Transfer is a software architectural style that defines a set of constraints to be used for creating Web services.
Constraints:
-Client-server architecture;
-Statelessness - servers don't store information about the session state;
-Cacheability - clients can cach responses from servers;
-Layered system - an intermediate servers may be used to increase scalability;
-Uniform interface: 
    +Resource identification in requests (using URIs) = the resourses are separate from the representations that are returned 
     to the client. (the server could send data from its database as HTML/XML/JSON — none of which are the server's internal repr.).
    +Self-descriptive messages = Each message includes enough information to describe how to process the message.

Restful APIs - are web service APIs that satisfy REST constraints.

HTTP-based APIs are defined with the following aspects:
   +a base URI,  such as http://api.example.com/collection/
   +standard HTTP methods (e.g., GET, POST, PUT, PATCH and DELETE);

So, most important rules to make API restfull are:
 -to use HTTP Request Verbs (HTTP-request language);
 -to use a specific pattern of routes and endpoint URLs

HTTP Vebs		      /articles			          /articles/chuck-norris
   GET		Fetches all the articles	Fetches the article on chuck-norris
   POST		Creates one new article		              -
   PUT		           -				      Updates the article on chuck-norris 
  PATCH		           -				      Updates the article on /chuck-norris 
  DELETE	Delete all the articles		Deletes the article on /chuck-norris
