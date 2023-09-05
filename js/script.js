const sendRaitingButton = document.getElementById('raiting-star__submit');

sendRaitingButton.addEventListener('click', sendRaiting);

function sendRaiting (){
    const raiting = document.querySelector('input[name="raitingStar__input"]:checked').value;
    document.getElementById("js-raiting").innerHTML = raiting;
     const messaje = document.getElementById("js-messaje");
     messaje.style.translate = "0 0";
     messaje.style.opacity = "1";
}
