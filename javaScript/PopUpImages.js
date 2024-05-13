
div1.style.display = "none";
div2.style.display = "none";
div3.style.display = "none";
div4.style.display = "none";
div5.style.display = "none";

function toggleVisibility(divId) {
        var div = document.getElementById(divId);
        if (div.style.display === "none") {
            div.style.display = "block";
        } else {
            div.style.display = "none";
        }
    }