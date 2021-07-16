let input = document.querySelector("#inp");
let list = document.querySelector("#list");
console.log("HEllo");
input.addEventListener("keypress", function(e) {
    if (e.code == "Enter") {
        let li = document.createElement("li");
        let task = e.currentTarget.value.trim();
        if (task != "") {
            li.innerHTML = task;
            e.currentTarget.value = "";
            list.append(li);
        }
        li.addEventListener("dblclick", function() {
            e.currentTarget.remove();
        });
    }
});