let myLeads = ["i", "am", "dumb"]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    console.log(myLeads)
}) 

for (let i = 0; i < myLeads.length; i++) {
    console.log(myLeads[i])
    ulEl.innerHTML += "<li>" + myLeads[i] + "</li>" + " "
}