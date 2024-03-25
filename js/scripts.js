// function newItem() {
//javascript
//1. Adding a new item to the list of items:
// let li = document.createElement("li");
// let inputValue = document.getElementById("input").value;
// let text = document.createTextNode(inputValue);
// li.appendChild(text);

// if (inputValue === "") {
//   alert("You must write something!");
// } else {
//   let list = document.querySelector("#list");
//   list.appendChild(li);
// }

// //2. Crossing out an item from the list of items:
//   function crossOut() {
//     li.classList.toggle("strike");
//   }

//   li.addEventListener("dblclick", crossOut);

// //   //3(i). Adding the delete button "X":
//   let crossOutButton = document.createElement("crossOutButton");
//   crossOutButton.appendChild(document.createTextNode("X"));
//   li.appendChild(crossOutButton);

// //   crossOutButton.addEventListener("click", deleteListItem);
//   //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
//   function deleteListItem() {
//     li.classList.add("delete");
//   }
//   // 4. Reordering the items:
//   $("#list").sortable();
// }

// jQuery

function newItem() {
  // 1. Adding a new item to the list of items:
  //selecting the value of input
  let inputValue = $("#input").val();
  //creating a new element "li"
  let li = $("<li></li>");
  //appending value from input value to the new element "li"
  li.append(inputValue);

  if (inputValue === "") {
    alert("You must write something");
  } else {
    //selecting list and appending new "li" element to it
    let list = $("#list");
    list.append(li);
  }

  //2. Crossing out an item from the list of items:
  //defining crossOut function
  function crossOut() {
    li.toggle("strike");
  }

  // adding handler event (double click) to the list item
  li.on("dblclick", function crossOut() {
    li.toggle("strike");
  });

  //3(i). Adding the delete button "X":
  let crossOutButton = $("<crossOutButton></crossOutButton>");
  crossOutButton.append(document.createTextNode("X"));
  li.append(crossOutButton);

  //creating a function to delete an item (adding a class display:none)
  function deleteListItem() {
    li.addClass("delete");
  }

  //adding event handler to crossOutButton element
  crossOutButton.on("click", deleteListItem);
}
