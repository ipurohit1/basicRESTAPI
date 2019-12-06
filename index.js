// Global variables
let count = 0;
let objects = [];

exports.handler = async(event) => {
    if (event.httpMethod === 'GET') {
        return read(event);
    }
    if (event.httpMethod === 'POST') {
        return create(event);
    }
    if (event.httpMethod === 'PUT') {
        return update(event);
    }
    if (event.httpMethod === 'DELETE') {
        return deleteObj(event);
    }
};

// GET
// Finds the object given the uid as a required url parameter
// Throws an error if uid is not found
const read = event => {
    // Gets url parameters
    let id = event["queryStringParameters"]["uid"];
    let i = 0;

    for (i = 0; i < objects.length; i++) {
        if (objects[i].uid == id) {
            return {
                statusCode: 200,
                body: JSON.stringify(objects[i])
            };
        }
    }

    return {
        statusCode: 400,
        body: JSON.stringify({
            "verb": "GET",
            "url": "https://dd0p84wz5g.execute-api.us-east-2.amazonaws.com/api/jsonobject?uid=" + id,
            "message": "Given uid was not found"
        })
    };

};


// POST
// Parses the body of the event and then adds a unique identifier
// and sends the JSON object back
// Throws an error if body is not a JSON object
const create = event => {
    try {
        let jsonobj = JSON.parse(event.body);
        // Generate unique identifier
        let random = Math.floor(Math.random() * 1000000);
        let unique = random.toString() + count.toString();
        count++;
        jsonobj.uid = unique;

        objects.push(jsonobj);

        return {
            statusCode: 200,
            body: JSON.stringify(jsonobj)
        };
    }
    catch (err) {
        return {
            statusCode: 400,
            body: JSON.stringify({
                "verb": "POST",
                "url": "https://dd0p84wz5g.execute-api.us-east-2.amazonaws.com/api/jsonobject",
                "message": "Not a JSON object"
            })
        };
    }
};

//PUT
// Looks for object with given uid in local array objects
// If found it replaces the object with JSON object from body and returns this object,
// otherwise it throws an error
const update = event => {
    let jsonobj = JSON.parse(event.body);
    let id = event["queryStringParameters"]["uid"];
    let i;

    for (i = 0; i < objects.length; i++) {
        if (objects[i].uid == id) {
            objects[i] = jsonobj;
            return {
                statusCode: 200,
                body: JSON.stringify(jsonobj)
            };
        }
    }

    return {
        statusCode: 400,
        body: JSON.stringify({
            "verb": "PUT",
            "url": "https://dd0p84wz5g.execute-api.us-east-2.amazonaws.com/api/jsonobject?uid=" + id,
            "message": "Object Not Found for PUT"
        })
    };
};

// DELETE
// Finds an element based of the input id and removes it from array objects
// If the element is not found, an error is thrown
const deleteObj = event => {
    let id = event["queryStringParameters"]["uid"];
    let i = 0;
    for (i = 0; i < objects.length; i++) {
        if (objects[i].uid == id) {
            objects.splice(i, 1);
            i--;
            return {
                statusCode: 200
            };
        }
    }
    return {
        statusCode: 400,
        body: JSON.stringify({
            "verb": "DELETE",
            "url": "https://dd0p84wz5g.execute-api.us-east-2.amazonaws.com/api/jsonobject?uid=" + id,
            "message": "Object to DELETE was not found"
        })
    };
};
