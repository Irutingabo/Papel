const element = id => document.getElementById(id)

let debitAccBtn = element("debitAccBtn");
let closedeb = element("closedeb");
let debitBtn = element("debitBtn");


debitAccBtn.onclick = () => {
    debitBtn.style.display = "block";
}
closedeb.onclick = () => debitBtn.style.display = "none";

let creditAccBtn = element("creditAccBtn");
let closeCred = element("closeCred");
let creditBtn = element("creditBtn");


creditAccBtn.onclick = () => {
    creditBtn.style.display = "block";
}
closeCred.onclick = () => creditBtn.style.display = "none";


let delTran = element("delTran");
let closeAct = element("closeact");
let deleteBtn = element("deleteBtn");
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