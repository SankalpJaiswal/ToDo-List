var todolist = JSON.parse(localStorage.getItem("todoLocal"))

var completed = JSON.parse(localStorage.getItem("completedList")) || []

console.log(todolist)

todolist.map(function(elem,i){
    var row = document.createElement("tr")

    var col1 = document.createElement("td")
    col1.innerText= elem.name

    var col2 = document.createElement("td")
    col2.innerText= elem.qty

    var col3 = document.createElement("td")
    col3.innerText= elem.priority

    var col4 = document.createElement("button")
    col4.innerText= "Mark as Complete"
    col4.addEventListener("click", function()
    {
        markComplete(elem)
    })

    row.append(col1,col2,col3,col4)

    document.querySelector("#body").append(row)




})

function markComplete(elem){

    console.log(elem)
    
    completed.push(elem)
    localStorage.setItem("completedList",JSON.stringify(completed))
}