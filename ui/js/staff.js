let debitAccBtn = document.getElementById("debitAccBtn");
let closedeb = document.getElementById("closedeb");
let debitBtn = document.getElementById("debitBtn");


debitAccBtn.onclick = () => {
    debitBtn.style.display = "block";
}
closedeb.onclick = () => debitBtn.style.display = "none";

let creditAccBtn = document.getElementById("creditAccBtn");
let closeCred = document.getElementById("closeCred");
let creditBtn = document.getElementById("creditBtn");


creditAccBtn.onclick = () => {
    creditBtn.style.display = "block";
}
closeCred.onclick = () => creditBtn.style.display = "none";


let delTran = document.getElementById("delTran");
let closeAct = document.getElementById("closeact");
let deleteBtn = document.getElementById("deleteBtn");
let status = document.getElementsByClassName('statu')[0]

delTran.onclick = () => {
    deleteBtn.style.display = "block";
    status.style.color = "#e42e0d"
    status.innerHTML = "(Deleted)"
}
closeAct.onclick = () => deleteBtn.style.display = "none";




window.onclick = event => {
    if (event.target == deleteBtn || event.target == creditBtn || event.target == debitBtn) {
        deleteBtn.style.display = "none";
        creditBtn.style.display = "none";
        debitBtn.style.display = "none";
    }
}