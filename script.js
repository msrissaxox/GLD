//This code finds the variable in the DOM.
//We then use the .getBoundingClientRect method to find the location from the top of the page on the screen.
//These two lines of code aren't neccessary. 
// let firstSection = document.querySelector("#first_section");
// console.log(firstSection.getBoundingClientRect());

function isVisible(element){
    let elementBox = element.getBoundingClientRect();
    //This function takes an argument called element. This argument represents the section on the page that we will check
    //for it's distance from the top of the page We attach the getBoundingClientRect to this element.
    //The element.getBoundingClientRect() method returns a DOMRect object providing information about the size of an element and its position relative to the viewport.
    //This is where we get the .top information to use below.
    let distanceFromTop = -200;
    //this is setting distance from the top
    if(elementBox.top - window.innerHeight < distanceFromTop){
        return true;
    } else {
        return false;
    }
}
    //This code above is grabbing the elementBox.top and subtracting window.innerHeight. If it is less than -200, it will return 
    //true. This means that the section is within peek distance.  If it is greater than 200, it will return false. This means that it is not within peek distance.

function scanDocument(){
    let sectionList = document.querySelectorAll(".hidden");
    sectionList.forEach(function(section) {
        if(isVisible(section)){
            section.classList.remove("hidden");
        };
    });
//console.log(numberOfScans);
//numberOfScans++;
}

document.addEventListener("scroll", scanDocument);