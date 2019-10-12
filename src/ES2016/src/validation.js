
var isNameValid = false;
var isSurnameValid = false;
var isUsernameValid = false;
var isPasswordValid = false;
var isConfirmPasswordValid = false;
var isEmailValid = false;
var isSubmitShowed = false;

export function allIsValid(){
    if(isNameValid && isSurnameValid && isUsernameValid && isPasswordValid && isConfirmPasswordValid && isEmailValid && !isSubmitShowed){
        isSubmitShowed = true;
        var newnode = document.createElement("div");
        newnode.innerHTML = '<button type="submit" class="btn btn-primary btn-block">Register</button>';
        document.getElementById("registerForm").appendChild(newnode);
        return true;
    }else if((!isNameValid || !isSurnameValid || !isUsernameValid || !isPasswordValid || !isConfirmPasswordValid || !isEmailValid) && isSubmitShowed) {
        isSubmitShowed = false;
        var parentNode = document.getElementById("registerForm");
        parentNode.removeChild(parentNode.lastChild);
        return false;
    }
}


export function checkName(text) {
    var RegExpression = /^[a-zA-Z\s]*$/;

    if (RegExpression.test(text)) {
        return true;
    } else {
        return false;
    }
}

export function checkUser(text) {
    var RegExpression = /^[a-zA-Z\d_]*$/;

    if (RegExpression.test(text)) {
        return true;
    } else {
        return false;
    }
}

export function checkEmail(text) {
    var RegExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (RegExpression.test(text)) {
        return true;
    } else {
        return false;
    }
}


export const validName = function(){
    var node = document.getElementById("nameValid");
    if(checkName(this.value) && this.value.length != 0){
        isNameValid = true;
        node.classList.remove("invalid");
        node.classList.add("valid");
        node.innerHTML = '<i class=\"fas fa-check\"></i>';
    }else{
        isNameValid = false;
        node.classList.remove("valid");
        node.classList.add("invalid");
        node.innerHTML = '<i class="fas fa-times"></i>';
    }
    allIsValid();
}

export const validSurname = function(){
    var node = document.getElementById("surnameValid");
    if(checkName(this.value) && this.value.length != 0){
        isSurnameValid = true;
        node.classList.remove("invalid");
        node.classList.add("valid");
        node.innerHTML = '<i class=\"fas fa-check\"></i>';
    }else{
        isSurnameValid = false;
        node.classList.remove("valid");
        node.classList.add("invalid");
        node.innerHTML = '<i class="fas fa-times"></i>';
    }
    allIsValid();
}

export const validUsername = function(){
    var node = document.getElementById("usernameValid");
    if(checkUser(this.value) && this.value.length != 0){
        isUsernameValid = true;
        node.classList.remove("invalid");
        node.classList.add("valid");
        node.innerHTML = '<i class=\"fas fa-check\"></i>';
    }else{
        isUsernameValid = false;
        node.classList.remove("valid");
        node.classList.add("invalid");
        node.innerHTML = '<i class="fas fa-times"></i>';
    }
    allIsValid();
}

export const validPassword = function(){
    var node = document.getElementById("passwordValid");
    if(checkUser(this.value) && this.value.length > 7 && this.value.length < 16){
        isPasswordValid = true;
        node.classList.remove("invalid");
        node.classList.add("valid");
        node.innerHTML = '<i class=\"fas fa-check\"></i>';
    }else{
        isPasswordValid = false;
        node.classList.remove("valid");
        node.classList.add("invalid");
        node.innerHTML = '<i class="fas fa-times"></i>';
    }
    allIsValid();
}

export const validConfirmPassword = function(){
    var node = document.getElementById("confirmPasswordValid");
    var passwordNode = document.getElementById("password").value;
    if(checkUser(this.value) && this.value.length > 7 && this.value.length < 16 && this.value == passwordNode){
        isConfirmPasswordValid = true;
        node.classList.remove("invalid");
        node.classList.add("valid");
        node.innerHTML = '<i class=\"fas fa-check\"></i>';
    }else{
        isConfirmPasswordValid = false;
        node.classList.remove("valid");
        node.classList.add("invalid");
        node.innerHTML = '<i class="fas fa-times"></i>';
    }
    allIsValid();
}

function validEmail(){
    var node = document.getElementById("emailValid");
    if(checkEmail(this.value)){
        isEmailValid = true;
        node.classList.remove("invalid");
        node.classList.add("valid");
        node.innerHTML = '<i class=\"fas fa-check\"></i>';
    }else{
        isEmailValid = false;
        node.classList.remove("valid");
        node.classList.add("invalid");
        node.innerHTML = '<i class="fas fa-times"></i>';
    }
    allIsValid();
}

export const loadEvent = function () {
    document.getElementById("name").addEventListener('input', validName);
    document.getElementById("surname").addEventListener('input', validSurname);
    document.getElementById("username").addEventListener('input', validUsername);
    document.getElementById("password").addEventListener('input', validPassword);
    document.getElementById("confirmPassword").addEventListener('input', validConfirmPassword);
    document.getElementById("email").addEventListener('input', validEmail);
}
