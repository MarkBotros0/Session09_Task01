function openModal(index) {
    indexToDelete = index;
    document.getElementsByClassName("modal-body")[0].innerText = "are you sure you want to delete?"
}

function newElement() {
    var li = $("<li></li>").attr("id", counter)
    var inputValue = $("#myInput").val()
    var p = $("<h4></h4>").text(inputValue)
    li.append(p);
    $("#myUL").append(li)
    $("#myInput").val("")
    var span = $("<span class='close' onclick='openModal(" + counter + ")'></span>");
    span.attr("data-bs-toggle", "modal")
    span.attr("data-bs-target", "#exampleModal")
    span.text("\u00D7");
    li.append(span);
    counter++
}

function deleteItem() {
    $("#" + indexToDelete).remove();
}

var counter = 0;
var indexToDelete = '';


$(document).ready(function () {

    var header = $("<div id='myDIV' class='header bg-dark'></div>")
    var title = $('<h2></h2>').text("My To Do List")
    var input = $("<input type='text' id='myInput' placeholder='Todo...'></input>")
    var span = $(`<span onclick='newElement()' class='addBtn' data-bs-toggle='modal' data-bs-target='#exampleModal'></span>`).text("Add")
    var list = $("<ul id='myUL'></ul>")

    $(header).append(title).append(input).append(span)
    $("body").prepend(list).prepend(header)


    $('#myInput').on('keypress', function (e) {
        if (e.key === 'Enter') {
            newElement();
        }
    });








});
// var myNodelist = document.getElementsByTagName("LI");

// for (i = 0; i < myNodelist.length; i++) {
//     var span = document.createElement("SPAN");
//     var txt = document.createTextNode("\u00D7");
//     span.className = "close";
//     span.setAttribute("data-bs-toggle", "modal")
//     span.setAttribute("data-bs-target", "#exampleModal")
//     span.appendChild(txt);
//     myNodelist[i].appendChild(span);
// }

// // Click on a close button to hide the current list item
// var close = document.getElementsByClassName("close");
// for (i = 0; i < close.length; i++) {
//     close[i].onclick = function () {
//         var div = this.parentElement;
//         div.style.display = "none";
//     }
// }

// document.querySelector('#myInput').addEventListener('keypress', function (e) {
//     if (e.key === 'Enter') {
//         newElement();
//     }
// });

// Create a new list item when clicking on the "Add" button
