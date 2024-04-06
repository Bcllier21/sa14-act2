function validate() {
    let username = document.getElementById('usn').value;
    let email = document.getElementById('em').value;
    let password = document.getElementById('pw').value;
    let NameError = document.getElementById('NameError');
    let EmailError = document.getElementById('EmailError');
    let PassError = document.getElementById('PassError');
    let isValid = true;

    NameError.innerHTML = "Valid input";
    EmailError.innerHTML = "Valid input";
    PassError.innerHTML = "Valid input";

    if (username.length < 6) {
        NameError.innerHTML = "Username must be at least 6 characters long";
        isValid = false;
    }
    
    if (!verifyEmail(email)) {
        EmailError.innerHTML = "Invalid email";
        isValid = false;
    }

    if (password.length < 8) {
        PassError.innerHTML = "Password must be at least 8 characters long";
        isValid = false;
    }
        else if (!upperinpass(password) && (!numinpass(password))) {
            PassError.innerHTML = "Password requires at least a number and an uppercase letter";
            isValid = false;
        }
        else if (!upperinpass(password)) {
            PassError.innerHTML = "Password requires at least 1 uppercase letter";
            isValid = false;
        }
        else if (!numinpass(password))  {
            PassError.innerHTML = "Password requires at least 1 number";
            isValid = false;
        }
    
    
    return isValid;
    }

    function verifyEmail(email) {
        let reg = /\S+@\S+\.\S+/;
        return reg.test(email)
    }
    function upperinpass(password) {
        let reg = /[A-Z]{1}/
        return reg.test(password)
    }
    function numinpass(password) {
        let reg = /\d{1}/
        return reg.test(password)
    }
    
