const element = id => document.getElementById(id)

// Deleting User (Elements)
let delTran = element("delTran");
let closeDelAct = element("closeact");
let deleteBtn = element("deleteBtn");
let status = document.getElementsByClassName('statu')[0]


// Deleting account (Events)
delTran.onclick = () => {
    deleteBtn.style.display = "block";
    status.style.color = "#e42e0d"
    status.innerHTML = "(Deleted)"
}
closeDelAct.onclick = () => deleteBtn.style.display = "none";

// Closing windows (Events)
window.onclick = event => {
    if (event.target == deleteBtn) {
        deleteBtn.style.display = "none";
    }
}