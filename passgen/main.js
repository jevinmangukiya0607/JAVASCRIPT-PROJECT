const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!`~@#$%^&*()_-+=?/><,.\|₹0123456789'; 
let output = document.querySelector(".output")

function randomValue(value) {
    return Math.floor(Math.random()*value);
}

function genPassword() {
    let length = document.querySelector("#length").value;
    document.querySelector(".numbervalue").textContent = length;

    let str = '';
    for (let i = 0; i < length; i++) {
        let random = randomValue(characters.length);   
        str += characters.charAt(random)
    }
    output.value = str;
}

function copyClip() {
    output.select();
    document.execCommand('copy');
    alert("Password Copied Successfully");
}

genPassword();