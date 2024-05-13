            var div1 = document.getElementById("div1");
            var div2 = document.getElementById("div2");
            var div3 = document.getElementById("div3");
            var div4 = document.getElementById("div4");

            div1.style.display = "none";
            div2.style.display = "none";
            div3.style.display = "none";
            div4.style.display = "none";


function toggleVisibility(divId) {
        var div = document.getElementById(divId);
        if (div.style.display === "none") {
            div.style.display = "block";
        } else {
            div.style.display = "none";
        }
    }