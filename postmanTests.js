//  Tests are written with Postman template and can be run in the application.
// Certain methods cannot be tested on correctness without first calling POST
// to create an initial object.

// Tests for POST: https://dd0p84wz5g.execute-api.us-east-2.amazonaws.com/api/jsonobject
// with valid response body -> {"test": "123"}

// The server call went through with a successful status of 200
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

// The response body contains test
pm.test("Body contains test", function () {
    pm.expect(pm.response.text()).to.include("test");
});

// The response body contains uid
pm.test("Body contains uid", function () {
    pm.expect(pm.response.text()).to.include("uid");
});

// Tests for Post: https://dd0p84wz5g.execute-api.us-east-2.amazonaws.com/api/jsonobject
// with invalid response body -> abc

// The server call went through with an unsuccessful status of 400
pm.test("Status code is 400", function () {
    pm.response.to.have.status(400);
});

// The response body contains verb
pm.test("Body contains verb", function () {
    pm.expect(pm.response.text()).to.include("verb");
});

// The response body contains url
pm.test("Body contains url", function () {
    pm.expect(pm.response.text()).to.include("url");
});

// The response body contains message
pm.test("Body contains message", function () {
    pm.expect(pm.response.text()).to.include("message");
});

// Tests for valid GET: https://dd0p84wz5g.execute-api.us-east-2.amazonaws.com/api/jsonobject?uid=3070866
// where uid = 3070866
// Given that JSON obj { "test": "1",  "uid": "3070866"} has been created

pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Body contains test", function () {
    pm.expect(pm.response.text()).to.include("test");
});

pm.test("Body contains uid", function () {
    pm.expect(pm.response.text()).to.include("uid");
});

// Tests for invalid GET: https://dd0p84wz5g.execute-api.us-east-2.amazonaws.com/api/jsonobject?uid=3070866
// where uid = 3070866 and no objects have been created

pm.test("Status code is 400", function () {
    pm.response.to.have.status(400);
});

// The response body contains verb
pm.test("Body contains verb", function () {
    pm.expect(pm.response.text()).to.include("verb");
});

// The response body contains url
pm.test("Body contains url", function () {
    pm.expect(pm.response.text()).to.include("url");
});

// The response body contains message
pm.test("Body contains message", function () {
    pm.expect(pm.response.text()).to.include("message");
});

pm.test("Body contains message", function () {
    pm.expect(pm.response.text()).to.include("GET");
});

pm.test("Body contains message", function () {
    pm.expect(pm.response.text()).to.include("Given uid was not found");
});


// Tests for valid PUT: https://dd0p84wz5g.execute-api.us-east-2.amazonaws.com/api/jsonobject?uid=3070866
// where uid = 3070866 and JSON body = {"id" : "3070866", "test" : "objectChanged"}
// Given that JSON obj { "test": "1",  "uid": "3070866"} has been created
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Body contains test", function () {
    pm.expect(pm.response.text()).to.include("test");
});

pm.test("Body contains uid", function () {
    pm.expect(pm.response.text()).to.include("uid");
});

pm.test("Body contains objectChanged", function () {
    pm.expect(pm.response.text()).to.include("objectChanged");
});

// Tests for invalid PUT: https://dd0p84wz5g.execute-api.us-east-2.amazonaws.com/api/jsonobject?uid=3070866
// where uid = 3070866 and JSON body = {"id" : "3070866", "test" : "objectChanged"}
// Given that no objects have been created

pm.test("Status code is 400", function () {
    pm.response.to.have.status(400);
});

// The response body contains verb
pm.test("Body contains verb", function () {
    pm.expect(pm.response.text()).to.include("verb");
});

// The response body contains url
pm.test("Body contains url", function () {
    pm.expect(pm.response.text()).to.include("url");
});

// The response body contains message
pm.test("Body contains message", function () {
    pm.expect(pm.response.text()).to.include("message");
});

pm.test("Body contains PUT", function () {
    pm.expect(pm.response.text()).to.include("PUT");
});

pm.test("Body contains actual message", function () {
    pm.expect(pm.response.text()).to.include("Object Not Found for PUT");
});

// Tests for valid DELETE: https://dd0p84wz5g.execute-api.us-east-2.amazonaws.com/api/jsonobject?uid=3070866
// where uid = 3070866
// Given that JSON obj { "test": "1",  "uid": "3070866"} has been created

pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

// Call GET right after DELETE on same URL: https://dd0p84wz5g.execute-api.us-east-2.amazonaws.com/api/jsonobject?uid=3070866
 // To show that object was deleted
 pm.test("Status code is 400", function () {
     pm.response.to.have.status(400);
 });

 // The response body contains verb
 pm.test("Body contains verb", function () {
     pm.expect(pm.response.text()).to.include("verb");
 });

 // The response body contains url
 pm.test("Body contains url", function () {
     pm.expect(pm.response.text()).to.include("url");
 });

 // The response body contains message
 pm.test("Body contains message", function () {
     pm.expect(pm.response.text()).to.include("message");
 });

 pm.test("Body contains message", function () {
     pm.expect(pm.response.text()).to.include("GET");
 });

 pm.test("Body contains message", function () {
     pm.expect(pm.response.text()).to.include("Given uid was not found");
 });
