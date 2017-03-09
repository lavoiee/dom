var elBtnList = document.getElementById("btn-list");


function add(){
    var position = document.getElementById("input-position").value;
    var x = document.getElementById("input-text").value;

    if(x != "" && position != ""){
        //
        // Get node list for btn-list and count. Check position.
        //

        // 
        // Clear the input field and create the new button
        //
        document.getElementById("input-text").value = "";    
        var li = document.createElement("li");
        li.className = "btn";
        var textNode = document.createTextNode(x);   
        elBtnList.appendChild(li).appendChild(textNode);
    }
    else {
        alert("Please enter a label name and a position for your new button");
    }
    
    document.getElementById("input-text").focus();
}

function remove(){
    //
    // removeChild() ?
    //
}

function Update(){
    //
    // What is this exactly for
    //
}

