AFRAME.registerComponent("create-button",{
    init: function(){
        var button1 = document.createElement("button")
        button1.innerHTML = "VIEW MORE";
        button1.setAttribute("id",'more-button');
        button1.setAttribute("class","btn btn-danger ml-3");

        var button2 = document.createElement("button")
        button2.innerHTML = "FULL VIEW";
        button2.setAttribute("id",'view-button');
        button2.setAttribute("class","btn btn-danger ml-3");

        var buttonDiv = document.getElementById(button-div);
        buttonDiv.appendChild(button1);
        buttonDiv.appendChild(button2);
    }
})