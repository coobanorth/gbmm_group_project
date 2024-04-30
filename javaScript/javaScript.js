let overallScore =0;

console.log("connected")

function responsiveNav() {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }


// function to test wether multiple choice question is  correct
// step 1 copy the code on the html page
// step 2 write the question and answer into the labels and header
// step 3 change the value of the correct answer to true
// it should work any bugs lemme know
function newQuizMulti()
{
  let multiChoiceNum = 2;
  let multi = document.getElementsByName('multiChoice0');
  let x = "";
  var multiVal;
  let multiScore =0;
  for(let j= 0; j<multiChoiceNum; j++)
  {
    console.log(j)
    x ="multiChoice"+j;
    y ="#multiChoiceL"+j;
    multi = document.getElementsByName(x);
    for(var i = 0; i < multi.length; i++){
        if(multi[i].checked)
        {
          multiVal = multi[i].value;
            console.log(multiVal)
            if( multiVal == "true")
            {
              multiScore = multiScore + 1
              document.querySelector(y).style.backgroundColor="green"
            }
            else
            {
              document.querySelector(y).style.backgroundColor="red"

            }
        }
    }
  }
  return multiScore;
}

// function that tests wether the answer is correct
// Instructions for use
// 1. call the function from the html         <input id="in" type="text" onkeyup="myFunc(this, 0)"></input>
// 2. add the answer into the answerBank array
// 3. replace the second value being passed and the 'in-' number to the function with the index of the answer

function newQuiz(){
  let answerBank =["30","20","85","true","17 million","test3"];// this is the answer bank enter all the question answers in here
  let overallScore = 0; 
  let idFind;

  for (let i =0 ; i<answerBank.length; i++){
    idFind = "#in"+i;
    answer  = document.querySelector(idFind);
    try
    {
    if (answer.value.trim() == answerBank.at(i))
    {
      console.log("true");
      overallScore = overallScore+ 1;
      document.querySelector(idFind).style.backgroundColor="green";
    }
    else
    {
      document.querySelector(idFind).style.backgroundColor="red";

    }
  }
    catch{
      break;
    }


  }
  overallScore = overallScore + newQuizMulti();
  console.log("Overall score ==" + overallScore );
  let text =document.querySelector("#btn1")
  text.innerHTML = overallScore

}
