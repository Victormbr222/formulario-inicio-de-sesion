let passInput = documentById("password");
let letter = documentById("letter");
let uppercase = documentById("uppercase");
let number = documentById("number");
let lengthr = documentById("length");


    passInput.onFocus = function(){
        document.getElementById("message").style.display = "block";
    }
    passInput.onblur = function(){
    document.getElementById("message").style.display = "none";
    } 

    passInput.onkeyup = function() {
        let lowerCaseLetters = /[a-z]/g;
        if(passInputvalue.match(lowerCaseLetters)){
           letter.classList.remove ("invalid");
           letter.classList.add("valid");
        }else
            letter.classlist.renove("valid");
            letter .classList.add("invalid");
        let Uppercaseletters = /[A-Z]/g;
        if (passInput.value.match (UpperCaseletters)){
             uppercase.classList.remove("invalid");
             uppercase.classList.add("valid");
        }else{ uppercase.classtist.remove("valid");
            uppercase.classList.add("invalid");
    }

let numbers = /[0-9]/g;
if(passInput.value.match(numbers)){
    number.classList.remove("invalid");
    number.classList.add("valid");
 }else{
    number.classList.remove("valid");
    number.classList.add("invalid");
}

if (passInputvalue.length >= 8){
    length.classList.remove("invalid")
    length.classList.add("valid");
}else{ 
    length.classList.renove("valid");
    length.classList.add("invalid");
    }
}