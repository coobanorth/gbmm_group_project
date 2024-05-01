let originalImage = "../images/Universal/PlaceHolder.png"; // Store the original image source
let newImage = ""; // New image source
let isOriginal = false; // Flag to track current image state

let src="";

const all_buttons = document.querySelectorAll('.btn');
console.log(all_buttons) //ensuring all buttons being logged

let targetImage = "";
let buttonClicked = "";
all_buttons.forEach(bt =>{
    bt.addEventListener('click', (e) =>{
        buttonClicked =e.target.id;
        targetImage =e.target.innerHTML;

        var srcCheck = document.getElementById(targetImage).getAttribute('src');
        console.log("src:",srcCheck);

        toggleImage();
    })
});


// Function to toggle between original and new image
function toggleImage() {
    let img = document.querySelector(targetImage);

    if (src == "../images/Universal/PlaceHolder.png") {
        isOriginal = false;
        console.log(isOriginal)
    } else {
        isOriginal = true;
        console.log(isOriginal)
    }

    if (isOriginal == true) {
       // originalImage = img.getAttribute("src"); // Store the original image
        img.setAttribute("src", buttonClicked); // Set the new image
    } else {
        img.setAttribute("src", originalImage); // Set the original image
    }
}