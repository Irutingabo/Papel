let actBtn = document.getElementById("actBtn");

let closeAct = document.getElementById("closeAct");
let activate = document.getElementById("activate");
let status = document.getElementsByClassName('statu')[0]

actBtn.onclick = () => {
    activate.style.display = "block";
    status.style.color = "#16C39A"
    status.innerHTML = "(Active)"
}
closeAct.onclick = () => activate.style.display = "none";



let deactBtn = document.getElementById("deactBtn");
let closeDeact = document.getElementById("closeDeact");
let deActivate = document.getElementById("deActivate");

deactBtn.onclick = () => {
    deActivate.style.display = "block";
    status.style.color = "#e42e0d"
    status.innerHTML = "(Inactive)"
}

closeDeact.onclick = () => deActivate.style.display = "none";



window.onclick = event => {
    if (event.target == deActivate || event.target == activate) {
        deActivate.style.display = "none";
        activate.style.display = "none";
    }
}