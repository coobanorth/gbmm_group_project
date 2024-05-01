let originalImage = "../images/Universal/PlaceHolder.png"; // Store the original image source
let newImage = ""; // New image source
let isOriginal = false; // Flag to track current image state

const all_buttons = document.querySelectorAll('.btn');
console.log(all_buttons) //ensuring all buttons being logged

let targetImage = "";
let buttonClicked = "";
all_buttons.forEach(bt =>{
    bt.addEventListener('click', (e) =>{
        buttonClicked =e.target.id;
        targetImage =e.target.innerHTML;
        console.log(buttonClicked);
        console.log(targetImage);
        toggleImage();
    })
});


// Function to toggle between original and new image
function toggleImage() {
    let img = document.querySelector(targetImage);

    if (isOriginal == true) {
       // originalImage = img.getAttribute("src"); // Store the original image
        img.setAttribute("src", buttonClicked); // Set the new image
        isOriginal = false;
        console.log("target image:",targetImage)
        console.log("original image:",originalImage)
        console.log("button clicked:",buttonClicked)
        console.log("isOriginal:",isOriginal)
    } else {
        img.setAttribute("src", originalImage); // Set the original image
        isOriginal = true;
        console.log("target image:",targetImage)
        console.log("original image:",originalImage)
        console.log("button clicked:",buttonClicked)
        console.log("isOriginal:",isOriginal)
    }
}