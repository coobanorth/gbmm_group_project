console.log("connected")

function responsiveNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

// function that tests wether the answer is correct
// Instructions for use
// 1. call the function from the html         <input id="in" type="text" onkeyup="myFunc(this, 0)"></input>
// 2. add the answer into the answerBank array
// 3. replace the second value being passed and the 'in-' number to the function with the index of the answer
function myFunc(elem, index) {
  x="in"+index;
  console.log(x)
  var element = document.getElementById(x);
  let answerBank =["30","20","85","True","17 million"];// this is the answer bank enter all the question answers in here
  input = (elem.value);
  if(input == answerBank[index]){
    element.style.backgroundColor = "green";
  } else{
    element.style.backgroundColor = "red";
  }
}
// function to test wether multiple choice question is  correct
//works pretty much the same as the text one
function multiChoice(elem, index){
  let input = elem.value;
  let answerBank =["test3","test2"];//enter answers here

  x ="multipleChoice"+index;
  let element = document.getElementById(x);
  
  if (input == answerBank[index]){
    element.style.backgroundColor = "green";
  }else{
    element.style.backgroundColor="red";
  }

}


