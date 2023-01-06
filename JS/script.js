function submit() {
    var fname = document.getElementById(fname).value;
    var lname = document.getElementById(lname).value;
    var mail = document.getElementById(mail).value;
    var contact = document.getElementById(contact).value;
    var msg = document.getElementById(msg).value;
    var formvalid = false;

    var fnameBool = validateFname(fname, formvalid);
    var lnameBool = validateLname(lname, formvalid);
    var mailBool = validateMail(mail, formvalid);
    var contactBool = validateContact(contact, formvalid);
    var msgBool = validateMsg(msg, formvalid);
    
    if(fnameBool && lnameBool && mailBool && contactBool &&msgBool){
        alert("form is submitted");
        document.getElementById("fname").value = "";
        document.getElementById("lname").value = "";
        document.getElementById("mail").value = "";
        document.getElementById("contact").value = "";
        document.getElementById("msg").value = "";
    }
    else {
        alert("please check all the fields");
    }
}
function validateFname(fname, formValid) {
    if (fname.trim() == "") {
        formValid = false;
        document.getElementById('fname-err').innerHTML = "This field is required";
    }
    else if (fname.trim().length<3) {
        formValid = false;
        document.getElementById('fname-err').innerHTML = "This field is invalid";
    }
    else {
        formValid = true;
        document.getElementById('fname-err').innerHTML = " ";
    }
    return formValid;
}
function validateLname(lname, formValid) {
    if (lname.trim() == "") {
        formValid = false;
        document.getElementById('lname-err').innerHTML = "This field is required";
    }
    else if (lname.trim().length<3) {
        formValid = false;
        document.getElementById('lname-err').innerHTML = "This field is invalid";
    }
    else {
        formValid = true;
        document.getElementById('lname-err').innerHTML = " ";
    }
    return formValid;
}
function validateEmail(mail, formValid) {
    var pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (mail.trim() == " ") {
        formValid = false;
        document.getElementById('mail-err').innerHTML = "This field is required";
    } else if (!pattern.test(mail)) {
        formValid = false;
        document.getElementById('mail-err').innerHTML = "This field is invalid";
    }
    else {
        formValid = true;
        document.getAnimations('mail-err').innerHTML = "";
    }
    return formValid;
}
function validateContact(contact, formValid) {
    var pattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
    if (contact.trim() === "") {
        formValid = false;
        document.getElementById('tel-err').innerHTML = "This field is required";
    } else if (contact.trim().length != 10) {
        formValid = false;
        document.getElementById('tel-err').innerHTML = "This field is invalid";
    } else if (!pattern.test(contact)) {
        formValid = false;
        document.getElementById('tel-err').innerHTML = 'this field is invalid';
    } else {
        formValid = true;
        document.getElementById('tel-err').innerHTML = " ";
    }
    return formValid;
}
function validateMsg(msg, formValid) {
    if (msg.trim() == "") {
        formValid = false;
        document.getElementById('msg-err').innerHTML = "This field is required";
    }
    else if (msg.trim().length<10) {
        formValid = false;
        document.getElementById('msg-err').innerHTML = "This field is invalid";
    }
    else {
        formValid = true;
        document.getElementById('msg-err').innerHTML = " ";
    }
    return formValid;
}