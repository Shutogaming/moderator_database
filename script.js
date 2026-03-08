let currentRow = null

function updateCount(){

let rows = document.querySelectorAll("#mods tr")
document.getElementById("modCount").innerText = rows.length

}

updateCount()

document.getElementById("search").addEventListener("keyup",function(){

let filter = this.value.toLowerCase()
let rows = document.querySelectorAll("#mods tr")

rows.forEach(row=>{

let badge = row.cells[0].innerText.toLowerCase()
let user = row.cells[1].innerText.toLowerCase()
let role = row.cells[2].innerText.toLowerCase()

row.style.display =
badge.includes(filter) ||
user.includes(filter) ||
role.includes(filter)
? "" : "none"

})

})

function openAdd(){

currentRow = null
document.getElementById("modal").style.display="flex"

}

function closeModal(){

document.getElementById("modal").style.display="none"

}

function editRow(btn){

currentRow = btn.parentElement.parentElement

badge.value = currentRow.cells[0].innerText
username.value = currentRow.cells[1].innerText
role.value = currentRow.cells[2].innerText
status.value = currentRow.cells[3].innerText
discord.value = currentRow.cells[4].innerText
date.value = currentRow.cells[5].innerText
notes.value = currentRow.cells[6].innerText

document.getElementById("modal").style.display="flex"

}

function deleteRow(btn){

btn.parentElement.parentElement.remove()
updateCount()

}

function save(){

if(currentRow){

currentRow.cells[0].innerText = badge.value
currentRow.cells[1].innerText = username.value
currentRow.cells[2].innerText = role.value
currentRow.cells[3].innerText = status.value
currentRow.cells[4].innerText = discord.value
currentRow.cells[5].innerText = date.value
currentRow.cells[6].innerText = notes.value

}else{

let table = document.getElementById("mods")

let row = document.createElement("tr")

row.innerHTML = `
<td>${badge.value}</td>
<td>${username.value}</td>
<td>${role.value}</td>
<td>${status.value}</td>
<td>${discord.value}</td>
<td>${date.value}</td>
<td>${notes.value}</td>
<td>
<button onclick="editRow(this)">✏</button>
<button onclick="deleteRow(this)">🗑</button>
</td>
`

table.appendChild(row)

}

closeModal()
updateCount()

}
