let currentRow

function editRow(btn){
currentRow=btn.parentElement.parentElement

document.getElementById("badge").value=currentRow.cells[0].innerText
document.getElementById("username").value=currentRow.cells[1].innerText
document.getElementById("role").value=currentRow.cells[2].innerText

document.getElementById("formBox").style.display="block"
}

function save(){
currentRow.cells[0].innerText=document.getElementById("badge").value
currentRow.cells[1].innerText=document.getElementById("username").value
currentRow.cells[2].innerText=document.getElementById("role").value

document.getElementById("formBox").style.display="none"
}
