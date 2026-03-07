document.addEventListener("DOMContentLoaded",()=>{
const search=document.getElementById("search")
if(!search) return

search.addEventListener("keyup",function(){
let filter=this.value.toLowerCase()
let rows=document.querySelectorAll("#mods tr")

rows.forEach(row=>{
let badge=row.cells[0].innerText.toLowerCase()
let user=row.cells[1].innerText.toLowerCase()

row.style.display=(badge.includes(filter)||user.includes(filter))? "":"none"
})
})
})
