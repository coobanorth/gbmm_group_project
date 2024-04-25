<script>
let originalImage = ""; // Store the original image source
let newImage = "../images/social_media/EmailMsgVerify.png"; // New image source
let isOriginal = true; // Flag to track current image state

// Function to toggle between original and new image
function toggleImage() {
    let img = document.querySelector("#bannerImage1");

    if (isOriginal) {
        originalImage = img.getAttribute("src"); // Store the original image
        img.setAttribute("src", newImage); // Set the new image
        isOriginal = false;
    } else {
        img.setAttribute("src", originalImage); // Set the original image
        isOriginal = true;
    }
}
</script>