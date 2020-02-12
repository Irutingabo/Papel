const element = id => document.getElementById(id)

// Activating user (Elements)
let actBtn = element("actBtn");
let closeAct = element("closeAct");
let activate = element("activate");
let status = document.getElementsByClassName('statu')[0]


// Deactivating User (Elements)
let deactBtn = element("deactBtn");
let closeDeact = element("closeDeact");
let deActivate = element("deActivate");

// Deactivating user (Events)
deactBtn.onclick = () => {
    deActivate.style.display = "block";
    status.style.color = "#e42e0d"
    status.innerHTML = "(Inactive)"
}
closeDeact.onclick = () => deActivate.style.display = "none";

// Activating user (Events)
actBtn.onclick = () => {
    activate.style.display = "block";
    status.style.color = "#16C39A"
    status.innerHTML = "(Active)"
}
closeAct.onclick = () => activate.style.display = "none";



// Closing windows (Events)
window.onclick = event => {
    if (event.target == deActivate || event.target == activate) {
        deActivate.style.display = "none";
        activate.style.display = "none";
    }
}