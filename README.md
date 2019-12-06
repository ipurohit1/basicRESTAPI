# basicRESTAPI
Technology: To create the REST API, I used the API Gateway and Lambda services on
AWS. The API has a resource of jsonobject, which has the 4 REST calls: DELETE,
GET, POST, PUT. The Lambda function code was written in Node.JS. To test the API,
I used the Postman Platform.

URL: https://dd0p84wz5g.execute-api.us-east-2.amazonaws.com/api/jsonobject
The parameter uid can be specified at the end of this URL and is required for GET,
PUT, and DELETE. If this is not included, API Gateway returns a generic error message.

Lambda function design and implementation: The code for the Lamba is in the index.js file.
It contains an exports handler that calls one of the four CRUD methods based on
which HTTP method was called.

read method: The read method corresponds to GET and will find the object given the uid as a
required url parameter and will send a custom error if uid is not found.    

create method: The create method corresponds to POST and will add a unique
identifier to the input JSON object and then send it back. It will send a custom error
if the body is not a JSON object. It creates a unique identifier by generating
a large psuedo-random number and then appending the count variable (which keeps
track of how many objects have been created so far) to ensure that the id is unique.

update method: The update method correpsonds to PUT and will look for objects
with the given uid in the local array, objects. If found, it replaces the object
with the JSON object from body and returns this object. Otherwise, it throws a custom error

deleteObj method: The deleteObj method corresponds to DELETE and will and will look for objects
with the given uid in the local array, objects. If found, it deletes the object
from the list and and returns nothing. Otherwise, it throws a custom error.

Tests: The tests are located in the postmanTests.js file. They are written in the Postman Tests
template. Some of the tests denote a specific ID, but this ID is arbitrary and is just
supposed to represent the randomly generated ID.
