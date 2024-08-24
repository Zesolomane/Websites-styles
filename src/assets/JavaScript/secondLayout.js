const sideNav = document.querySelector('#leftSide');
const toggleButton = document.querySelector("#toggle");
const leftSide = document.querySelector('#leftSide');
let isExpanded = true;
toggleButton.addEventListener("click",()=> {

    if (isExpanded){
        leftSide.style.width = "0";
        
        
        console.log("clicked");
    }
    else {
        leftSide.style.width = "25%";
    }
    isExpanded = !isExpanded;
});

const overlay = document.querySelector("#overlay");
const overlayNavToggle = document.querySelector("#overlaySideNav");

const overlayNav= () => {
   overlay.style.display= "block";
   overlayNavToggle.style.visibility = "visible";
   overlayNavToggle.style.width = "300px";
   console.log('clicked');
}

const closeSideNavBth = document.querySelector("#closebtn");

const closeSideNav = () => {
    overlay.style.display= "none";
    overlayNavToggle.style.visibility = "hidden";
    overlayNavToggle.style.width = "0";
  
}
