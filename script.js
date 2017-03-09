//
// Get node list for btn-list and count. Check position.
//
var elBtnList = document.getElementById("btn-list");


function add(){
    var position = document.getElementById("input-position").value;
    var x = document.getElementById("input-text").value;

    if(x != "" && position != ""){
        //
        // Clear the input field and create the new button
        //

        // nth child
        document.getElementById("input-text").value = "";    
        var li = document.createElement("li");
        li.className = "btn";
        var textNode = document.createTextNode(x);          
        li.appendChild(textNode);
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
    // var CurrentPosition = prompt("Which button do you want to update?");
    // var position = document.getElementById("input-position").value;
    // var x = document.getElementById("input-text").value;

    // if(x != "" && position != ""){
    //     var position = document.getElementById("input-position").value;
    //     elBtnList.removeChild(elBtnList.childNodes[CurrentPosition]);
    //     var li = document.createElement("li");
    //     li.className = "btn";
    //     var textNode = document.createTextNode(x);          
    //     li.appendChild(textNode);
    //     elBtnList.insertBefore(li, elBtnList.childNodes[position]);
    // }
    // else {
    //     alert("Now enter the new label and position");
    // }
}

