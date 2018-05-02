//Set the inital code to zero for beginning of quiz
var initialScore = {
    drivingCat: 0,
    spaCat: 0,
    helicopterCat: 0,
    beachCat: 0,
    marthaStewartCat: 0
}
//Set up for result to be display to user
const resultCat = {
  drivingCat: {
    name: "",
    description: "",
    image: "/assets/results/result1.gif"
  },
  spaCat: {
    name: "",
    description: "",
    image: "/assets/results/result2.gif"
  },
  helicopterCat: {
    name: "",
    description: "",
    image: "/assets/results/result3.gif"
  },
  beachCat: {
    name: "",
    description: "",
    image: "/assets/results/result4.gif"
  },
  marthaStewartCat: {
    name: "",
    description: "",
    image: "/assets/results/result5.gif"
  }
}
$(function(){
    //Pseudo-coding...
    //We want users to be able to pick one radio button option relating to each question (5 possible answers in each question)
    //Once they have selected options they should be able to submit their input
    // The options will be scored and 1 of 5 results will appear depending on the selcted options
    //Result should be tweetable 
    $('form').on('submit', function(e){
        e.preventDefault();
        //first get the variables and assign them a val if they're checked
        const feeling = $('input[name=question1]:checked').val();
        const maladie = $('input[name=question2]:checked').val();
        const cure = $('input[name=question3]:checked').val(); 
        const idealCat = $('input[name=question4]:checked').val();
        console.log(feeling);
    })



})