// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
function addRandomGreeting() {
  const greetings =
      ['Hello world!', '¡Hola Mundo!', '你好，世界！', 'Bonjour le monde!'];

  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
//   const greetingContainer = document.getElementById('greeting-container');
//   greetingContainer.innerText = greeting;
//   alert(greeting);
  $("#rd").html(greeting);
}


fetch('https://8080-dot-12581680-dot-devshell.appspot.com/data?authuser=0')  // sends a request to /my-data-url
.then(response => response.json()) // parses the response as JSON
.then((facts) => { // now we can reference the fields in myObject!
  console.log(facts[0]);
  console.log(facts[1]);
  console.log(facts[2]);


  function addRandomfacts() {
    const elem = facts;
    const fact = facts[Math.floor(Math.random()* facts.length)];
    $("#rd").html(fact);
}
});

function PostComments() {
    doPost(htmlResponse);
}
$("#submit").click(function(){
    PostComments();
});





$("#rdfact").click(function(){
    randomFacts();
});
$("#surprise").click(function(){
    addRandomGreeting();
});

$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});

 $(window).scroll(function() {
            if ($(document).scrollTop() > 50) {
                $('.nav').addClass('affix');
                console.log("OK");
            } else {
                $('.nav').removeClass('affix');
            }
        });


        

