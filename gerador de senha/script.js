let sliderelement = document.querySelector("#slider");
let buttonelement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
let novaSenha = "";

sizePassword.innerHTML = sliderelement.value;

slider.oninput = function(){
    sizePassword.innerHTML = this.value;
}

