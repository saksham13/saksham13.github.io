/**
 * Created by sakshamgrover on 24/04/15.
 */
// Create a function to log the response from the Mandrill API
function log(obj) {
    console.log(JSON.stringify(obj));

}

// create a new instance of the Mandrill class with your API key
var m = new mandrill.Mandrill('5N4xzHAOdPQZ_wYnih4sSA');



// create a variable for the API call parameters


function theMail() {
// Send the email!
    var params = {
        "message": {
            "from_email":document.getElementById("email").value,
            "to":[{"email":"grover.saksham@gmail.com"}],
            "subject": "vnsadvisory-akshay",
            "text": document.getElementById("message").value
        }
    };
    m.messages.send(params, function(res) {
        log(res);
    }, function(err) {
        log(err);
    });
}