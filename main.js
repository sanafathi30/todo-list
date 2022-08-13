// 
let completed = [];
let pending = [];
let userInput = document.querySelector("#input");
let todoList = [];
let todoBody = document.querySelector(".todo-body");
const todoll = document.querySelector(".todo-list");
let todoUl = `<ul class="todo-list">`;
let btn = document.querySelector(".btn");

let completedBtn = document.querySelector(".completed");
let pendingBtn = document.querySelector(".pendin");
let All = document.querySelector(".all");

All.addEventListener("click", () => {
    let allOptions = document.querySelectorAll(".todo-list");

    allOptions.forEach(function(item) {
        item.classList.remove("display-none")

    })
})

pendingBtn.addEventListener("click", () => {
    let pendingItemes = document.querySelectorAll(".pending");
    // console.log(pendingItemes)
    pendingItemes.forEach(function(item) {
        // if(item.className.includes("display-none"))
        item.classList.remove("display-none");
    });
    let allCompletItemes = document.querySelectorAll(".complete");
    allCompletItemes.forEach(e => {
        e.classList.add("display-none");
    })
})

completedBtn.addEventListener("click", function() {

    // console.log(allCompletItemes)
    let pendingItemes = document.querySelectorAll(".pending");
    // console.log(pendingItemes)
    pendingItemes.forEach(function(item) {
        // if(item.className.includes("display-none"))
        item.classList.add("display-none");
    });

    let allCompletItemes = document.querySelectorAll(".complete");
    allCompletItemes.forEach((e) => {
        e.classList.remove("display-none");
    });


})

let template;

userInput.addEventListener("keydown", (e) => {


    if (e.key == "Enter") {

        if (template) {
            template.textContent = userInput.value;
            userInput.value = "";

            template = "";

        } else {
            addElemnt(userInput.value);
            userInput.value = "";
        }

    }
});





// add items

// function addItems() {
//     todoList.push(userInput.value);
//     // let input = userInput.value.trim();

//     let template = "";
//     todoList.forEach(function(item) {
//         if (item.trim()) {
//             template += addElemnt(item);
//             userInput.value = "";
//         }
//     });

//     todoBody.innerHTML = template;
// }

function addElemnt(item) {




    let mainDiv = document.createElement("div");
    mainDiv.className = "todo-list pending";

    let myInput = document.createElement("input");
    myInput.setAttribute("type", "checkbox");
    myInput.className = "checkbox"
    let span1 = document.createElement("span");
    span1.innerText = item;
    let editDiv = document.createElement("div");
    let span2 = document.createElement("span");
    span2.innerText = "...";
    span2.className = "last";
    let ul = document.createElement("ul");
    ul.className = "body-options display-none";
    let li1 = document.createElement("li");
    li1.innerText = "$ Edit";
    li1.className = "body-option";
    let li2 = document.createElement("li");
    li2.innerText = "$ delet";



    li2.className = "body-option";

    //
    mainDiv.appendChild(myInput);
    mainDiv.appendChild(span1);
    mainDiv.appendChild(editDiv);

    editDiv.appendChild(span2);
    editDiv.appendChild(ul);

    ul.appendChild(li1);
    ul.appendChild(li2);

    todoBody.appendChild(mainDiv);

    span2.addEventListener("click", editing);

    myInput.addEventListener("click", linethrough);

    li2.addEventListener("click", deletBtn);
    li1.addEventListener("click", edintigOption)
}

function edintigOption(t) {

    let option = this.parentNode.parentNode.previousElementSibling;
    console.log(option)
        // alert("hi")
    userInput.value = option.textContent;
    template = option;

    // console.log(t)









}

function deletBtn() {
    let deletSection = this.parentNode.parentNode.parentNode;
    deletSection.style.display = "none"

}
// clear all

btn.addEventListener("click", function() {
    console.log("hi");
    todoBody.innerHTML = "";
    todoUl = `<ul class="todo-list"></ul>`;

    todoList = [];
});


function reFactorEditing() {
    let submenues = document.querySelectorAll(".body-options");

    submenues.forEach(function(item) {
        item.classList.add("display-none");

    })
}

function editing() {
    // reFactorEditing();




    const submenu = this.nextElementSibling;

    if (submenu.className.includes("display-none")) {

        submenu.classList.remove("display-none");


    } else {
        submenu.classList.add("display-none");

    }


}



function linethrough(e) {
    const mainDiv1 = this.parentNode;

    let siblings = this.nextElementSibling;



    if (this.checked == true) {
        siblings.style.textDecoration = "line-through";
        mainDiv1.classList.remove("pending");
        mainDiv1.classList.add("complete");



    } else {
        siblings.style.textDecoration = "none";
        mainDiv1.classList.add("pending");
        mainDiv1.classList.remove("complete");

    }
}