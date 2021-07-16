let filters = document.querySelectorAll(".filter div");
let grid = document.querySelector(".grid");
let firstclick = true;

let c_ticket_id = 1;
let body = document.querySelector("body");
let addSelected = false;

let add = document.querySelector(".add");
add.addEventListener("click", function(e) {
    if (modalpop)
        return;
    modalpop = true;
    let mymodal = createModal();
    updateWritingArea(mymodal);
    console.log(mymodal);
    body.appendChild(mymodal);
})

let modalpop = false;

function createModal() {
    let modal = document.createElement("div");
    modal.classList.add("modal-container");
    // modal.innerHTML = `< div class = "
    //     writing - area "
    //     contenteditable > Enter Next Task < /div> <
    //     div class = "filter-area" >
    //         <
    //         div class = "modal-filter pink" > < /div> <
    //     div class = "modal-filter red" > < /div> <
    //     div class = "modal-filter green" > < /div> <
    //     div class = "modal-filter black" > < /div> < /
    //     div > `;
    modal.innerHTML = `
                <div class="writing-area" contenteditable>Enter Next Task</div>
                <div class="filter-area">
                    <div class="modal-filter pink"></div>
                    <div class="modal-filter red"></div>
                    <div class="modal-filter green"></div>
                    <div class="modal-filter black"></div>
                `
    let allFilterInMyModal = modal.querySelectorAll(".modal-filter");
    for (let i = 0; i < allFilterInMyModal.length; i++) {
        allFilterInMyModal[i].addEventListener("click", function(e) {
            modal.querySelector(`.modal-filter.${c_filter_color}`).style.opacity = "0.7";
            c_filter_color = allFilterInMyModal[i].classList[1];
            allFilterInMyModal[i].style.opacity = "1";
        })
    }
    return modal;
}

function updateWritingArea(modal) {
    let wa = modal.querySelector(".writing-area");
    wa.addEventListener("click", function(e) {
        if (firstclick == true) {
            wa.innerText = "";
        }
        firstclick = false;
    })
    wa.addEventListener("keypress", function(e) {
        if (e.code == "Enter") {
            if (e.shiftKey) {
                wa.appendChild(document.createElement("br"));
            } else {
                createTicket(modal);
                modalpop = false;
                firstclick = true;
            }
        }
    })
}

function createTicket(modal) {
    let myticket = document.createElement("div");
    myticket.classList.add("ticket");
    myticket.innerHTML = ` <div class = "bar">
                        <div class = "id"> TICKET ID: ${ c_ticket_id } </div> </div>
                        <div class = "task"
                        contenteditable> </div>`;
    let data = modal.querySelector(".writing-area").innerText;
    myticket.querySelector(".task").innerText = data;
    console.log(c_filter_color);
    myticket.querySelector(".bar").classList.add(c_filter_color + "");
    modal.remove();
    grid.appendChild(myticket);
    c_ticket_id++;

    myticket.addEventListener("click", function(e) {
        if (delete_selected) {
            myticket.remove();
        }
    })
}

let delete_selected = false;
let del = document.querySelector(".delete");
del.addEventListener("click", function(e) {
    if (delete_selected) {
        delete_selected = false;
    } else {
        delete_selected = true;
    }
})

let c_filter_color = "pink";

let c_filterToShow = null;


let navbar_filter = document.querySelectorAll(".filter div");
for (let i = 0; i < navbar_filter.length; i++) {
    navbar_filter[i].addEventListener("click", function(e) {
        // console.log(e)
        let c_filter_col = e.currentTarget.classList[0].split("-")[0];
        // console.log(c_filter_col);
        filterTickets(c_filter_col);
    })
}

let last_filter_state = null;

function filterTickets(color) {
    let allTickets = document.querySelectorAll(".ticket");
    for (let i = 0; i < allTickets.length; i++) {
        if (last_filter_state == color) {
            console.log(last_filter_state);
            allTickets[i].style.display = "block";
            continue;
        }
        console.log(last_filter_state + " " + color);
        last_filer_state = color;
        if (allTickets[i].querySelector(".bar").classList[1] != color) {
            allTickets[i].style.display = "none";
        } else {
            allTickets[i].style.display = "block";
        }
    }
}