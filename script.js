//
// Get node list for btn-list and count. Check position.
//
var elBtnList = document.getElementById("btn-list");


function add(){
    var position = document.getElementById("input-position").value;
    var x = document.getElementById("input-text").value;

    if(x !== "" && position !== ""){
        //
        // Clear the input field and create the new button
        //

        // nth child
        document.getElementById("input-text").value = "";
        var li = document.createElement("li");

        // Add the event listener for the new element.
        li.addEventListener("click", function(){
          alert("This button's label says " + x);
        });

        //Apply the class from the original button
        li.className = "btn";

        // Create and append the text node to the list item.
        var textNode = document.createTextNode(x);
        li.appendChild(textNode);

        // Insert the list item and it's child text node into the list
        // at the position chosen by the user with the spinner.
        elBtnList.insertBefore(li, elBtnList.childNodes[position]);
    }
    else {
        alert("Please enter a label name and a position for your new button");
    }

    document.getElementById("input-text").focus();
}

function remove(){
    var position = document.getElementById("input-position").value;
    elBtnList.removeChild(elBtnList.childNodes[position]);
}

function update(){
    var position = document.getElementById("input-position").value;
    var x = document.getElementById("input-text").value;
    var targetNode = elBtnList.childNodes[position];
    var firstChild = targetNode.firstChild;
    firstChild.nodeValue = x;
}
