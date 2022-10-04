AFRAME.registerComponent("markerhandler",{
    init:async function(){
        this.el.addEventListener("markerFound",()=>{
            console.log("Marker Found");
            this.handleMarkerFound();
        });
        this.el.addEventListener("markerLost",()=>{
            console.log("MarkerLost");
            this.handleMarkerLost();
        })
    },

    handleMarkerFound:function(){
        var buttonDiv = document.getElementById("button-div");
        buttonDiv.style.display = 'flex';
        let moreButton = document.getElementById("more-button");
        let viewButton = document.getElementById("view-button");

        moreButton.addEventListener("click",()=>{
            swall({
                icon : "warning",
                title : "View more",
                text : "View more cars of this type",
            })
        });
        viewButton.addEventListener("click",()=>{
            swall({
                icon : "https://i.imgur.com/4NZ6uLY.jpg",
                title : "Order Dish",
                text : "Entering full screen mode...",
            })
        });
    },

    handleMarkerLost:function(){
        var buttonDiv = document.getElementById("button-div");
        buttonDiv.style.display = "none";
    },
})