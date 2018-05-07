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
  marthaStewartCat: {
    name: "It's always a good thing when you're with Martha Stewart Cat.",
    description:
      "&quot;I catnap now and then, but I think while I nap, so it's not a waste of time.&quot; <em>Martha Stewart</em>.</br> Feeling stressed out and disorganized? Martha Stewart Cat will work fast to push anything you don't need in your life off your desk. You didn't need that phone. It's in the trash bin now, foget it. That succulent? Nope, don't need that where we're going. Shh, go to sleep now, Martha Stewart Cat will have this all cleaned by the time you wake up.",
    image: "assets/results/result5.gif",
    tweetThat: "pic.twitter.com/ubRU0CgYgB"
  },

  drivingCat: {
    name: "Let Taxi Cat take you places",
    description:
      "This cat could bring you to the hospital, your yoga class, or to the middle of nowhere and leave you with a cellphone at 5% battery. Whatever Taxi Cat does, Taxi Cat is just trying to drive into your heart.",
    image: "assets/results/result1.gif",
    tweetThat: "pic.twitter.com/3NoJFpup55"
  },

  helicopterCat: {
    name: "Helicopter Cat, we have lift-off",
    description:
      "For the thrill seekers. This cat will not make uncomfortable eye contact with you, it isn't going to try to change your life. Just sit down and regard Helicopter Cat in all of it's levitating glory. Please enjoy your time with Helicopter Cat with Beastie Boys 'Sabotage' playing on repeat.",
    image: "assets/results/result3.gif",
    tweetThat: "pic.twitter.com/Yqp3UPErmT"
  },

  beachCat: {
    name: "It's spicy outside, so bask in the warmth of the day with Beach Cat",
    description:
      "Beach Cat might play volleyball with you if that's what your into. Other activities also include: splashing in the water in slow motion like you're in a film flirting with each other,  breaking watermelons on a beach (that's a thing), building sandcastles, and more. Beach Cat will not sun bathe with you, but Beach Cat will always remind you to wear SPF.",
    image: "assets/results/result4.gif",
    tweetThat: "pic.twitter.com/gLORSsBRrH"
  },

  spaCat: {
    name: "Treat yo'self and spend the day with Spa Cat",
    description:
      "Spa Cat ensures that you don't waste any time going from sour face to Beyonce. You're already probably wasting a lot of time reading this when you should be booking some time at the Old Mill Spa with Spa Cat. <em>Please note:</em> MediCAT is not responsible for excess money spent with Spa Cat or medical procedures done while under the influence of Spa Cat.",
    image: "assets/results/result2.gif",
    tweetThat: "pic.twitter.com/OzYlxScqN4"
  },
  tweetMsg: {
    message:
      "I found my MediCAT and YOU can too at www.carolinepisano.com/medicat"
  }
};
$(function(){
    //We want users to be able to pick one radio button option relating to each question (5 possible answers in each question)
    //Once they have selected options they should be able to submit their input
    // The options will be scored and 1 of 5 results will appear depending on the selcted options
    //Result should be tweetable 
    $('form').on('submit', function(e){
        e.preventDefault();
        $("html").animate({ 
            scrollTop: $(".results").offset().top }, 
            "slow");
        //first get the variables and assign them a val if they're checked
        const feeling = Number($('input[name=question1]:checked').val());
        const maladie = Number($('input[name=question2]:checked').val());
        const cure = Number($('input[name=question3]:checked').val()); 
        const idealCat = Number($('input[name=question4]:checked').val());
        //add up total form - all of the answers (add values)
        const answerTotalValues = feeling + maladie + cure + idealCat;
        //check what the total is and make a decision on what cat users should get 
        console.log(answerTotalValues);

        //if answer to values is greater than or equal to 1 && less than or equal to for else if
        // 1-4 = marthaStewartCat
        // 5-8 = helicopterCat
        // 9-12 = drivingCat
        // 13-16 = beachCat
        // 17-20 = spaCat
        //grab the results container and call the empty method called empty - put this at the beginning, if it's at the end you won't see any results!
        $('.results').empty();
        if (answerTotalValues >= 1 && answerTotalValues <= 4) {
            $('.results').append(`<h2>${resultCat.marthaStewartCat.name}</h2>
            <p>${resultCat.marthaStewartCat.description}</p>
            <img src="${resultCat.marthaStewartCat.image}">
            <p>
            <a href="https://twitter.com/intent/tweet?text=%20${resultCat.tweetMsg.message}%20${resultCat.marthaStewartCat.tweetThat}" target="_blank"><i class="fab fa-twitter"></i></a>
            </p>`);
        } else if (answerTotalValues >=5 && answerTotalValues <=8) {
            $('.results').append(`<h2>${resultCat.helicopterCat.name}</h2>
            <img src="${resultCat.helicopterCat.image}">
            <p>${resultCat.helicopterCat.description}</p>
            <p>
                <a href="https://twitter.com/intent/tweet?text=%20${resultCat.tweetMsg.message}%20${resultCat.helicopterCat.tweetThat}" target="_blank"><i class="fab fa-twitter"></i></a>
            </p>`);
        } else if (answerTotalValues >=9 && answerTotalValues <=12) {
            $('.results').append(`<h2>${resultCat.drivingCat.name}</h2>
            <img src="${resultCat.drivingCat.image}">
            <p>${resultCat.drivingCat.description}</p>
            <p>
            <a href="https://twitter.com/intent/tweet?text=%20${resultCat.tweetMsg.message}%20${resultCat.drivingCat.tweetThat}" target="_blank"><i class="fab fa-twitter"></i></a>
            </p>`);
        } else if (answerTotalValues >=13 && answerTotalValues <=16) {
            $('.results').append(`<h2>${resultCat.beachCat.name}</h2>
            <img src="${resultCat.beachCat.image}">
            <p>${resultCat.beachCat.description}</p>
            <p>
            <a href="https://twitter.com/intent/tweet?text=%20${resultCat.tweetMsg.message}%20${resultCat.beachCat.tweetThat}" target="_blank"><i class="fab fa-twitter"></i></a>
            </p>`);
        } else if (answerTotalValues >=17 && answerTotalValues <=20) {
            $('.results').append(`<h2>${resultCat.spaCat.name}</h2>
            <img src="${resultCat.spaCat.image}">
            <p>${resultCat.spaCat.description}</p>
            <p>
            <a href="https://twitter.com/intent/tweet?text=%20${resultCat.tweetMsg.message}%20${resultCat.spaCat.tweetThat}" target="_blank"><i class="fab fa-twitter"></i></a>
            </p>`);
        };
        
    }) //end of form function 



}) //end of document ready