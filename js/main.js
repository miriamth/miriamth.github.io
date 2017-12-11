

    // Form Validation

    $(document).ready(function () { //do what's inside when the document is ready
    $("#contact-form").validate( {  //run the validate plugin on the html element with id of email_form
        rules: {  //include the rules that must be followed here
            "email": {  //the email_1 element in the #email_form should meet the following conditions:
                required: true,  //email_1 is required
                email: true      //email_1 needs to be an email address
            },
            "name": {
                required: true  //full_name is required
            },
            "message": {
                required: true  //message is required
            }
        }})});