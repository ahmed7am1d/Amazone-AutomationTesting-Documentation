var myText =
  "Hi it is Ahmed . Welcome to the Documentation of Testing The Functionality of Amazone Website. This Website was made to demonstraite the Test Suites and Test Cases and their details, for the Automation Testing Using Python and The Robotic FrameWork.",
  i = 0;
  
  document.addEventListener('DOMContentLoaded', function() {
    'use strict';
    var typeWriter = setInterval(function () {
        document.getElementById('lead').textContent += myText[i];
        i+=1;
        if (i > myText.length - 1) {
            clearInterval(typeWriter);
        }
    },30);

    

}, false);

// Set Number of test cases
var numberOfTestCases= document.querySelectorAll('[data-label="Test Case ID"]').length;
document.getElementById('numberOfTestCases').innerHTML  = numberOfTestCases.toString();
//Set Number of TEST SUITES
var numberOfTestSuites = document.querySelectorAll('[data-label="Test Suit ID"]').length;
document.getElementById('numberOfTestSuites').innerHTML  = numberOfTestSuites.toString();



