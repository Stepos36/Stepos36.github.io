var mq1 = window.matchMedia( "(max-width: 1198px)" );
var mq1min = window.matchMedia( "(min-width: 993px)" );
var mq2 = window.matchMedia( "(max-width: 992px)" );
var mq2min = window.matchMedia( "(min-width: 769px)" );
var mq3 = window.matchMedia( "(max-width: 768px)" );
var mq3min = window.matchMedia( "(min-width: 571px)" );
var mq4 = window.matchMedia( "(max-width: 570px)" );
var projects = [    {   name: 'Spice It Up' ,
                        image: 'assets/images/projects/spice-it-up/spice-it-up.png',
                        description: 'This app allows the user to search different ingredients and obtain recipes. Along with recipes, the user is able to search required ingredients on Amazon Fresh. With this information the user can easily order the ingredients and have a spicy meal.',
                        link: 'http://stepos36.github.io/Spice-It'
                    },
                    {   name: 'Pizza Lovers' ,
                        image: 'assets/images/projects/pizza/pizza.png',
                        description: 'A Point-Of-Sales system for a Pizzeria that allows you to experience the typical pizza place work flow. Use password "1234" to access manager dashboard',
                        link: 'https://obscure-beach-56866.herokuapp.com'
                    },
                    {   name: 'RL Scraper' ,
                        image: 'assets/images/projects/rferl/rferl.png',
                        description: 'A web application that lets users view and leave comments on the latest news from RadioLiberty news website',
                        link: 'http://rferl.herokuapp.com'
                    },
                    {   name: 'Friend finder' ,
                        image: 'assets/images/projects/friend-finder/icon.png',
                        description: "A compatibility-based 'FriendFinder' application - basically a dating app. This full-stack site takes in results from users' surveys, then compares their answers with those from other users. Then this app displays the name and picture of the user with the best overall match.",
                        link: 'http://friend-finder-36.herokuapp.com'
                    },
                    {   name: 'LIRI' ,
                        image: 'assets/images/projects/liri-node-app/liri.png',
                        description: "LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.",
                        link: 'https://github.com/Stepos36/liri-node-app'
                    },
                    {   name: 'Bamazon' ,
                        image: 'assets/images/projects/bamazon/icon.png',
                        description: "Bamazon is an Amazon-like SQL based app that has 2 possible user interfaces: Bamazon customer and Bamazon manager",
                        link: 'https://github.com/Stepos36/Bamazon'
                    },
                    {   name: 'Trivia Game' ,
                        image: 'assets/images/projects/trivia/trivia.png',
                        description: 'In this game you get to pick one of 4 different themes and test your knowledge on Cars, TV shows, History or Games.',
                        link: 'http://stepos36.github.io/TriviaGame'
                    },
                    {   name: 'RPS-online' ,
                        image: 'assets/images/projects/rps/icon.png',
                        description: 'Classic rock-paper-scissors multiplayer game. Enjoy playing it with your friends!',
                        link: 'http://stepos36.github.io/RPS-Multiplayer'
                    }
            ];
function createPortfolioCard(name, imgSrc, desc) {
    var cardDiv = $('<div>', { 
      class: 'card project-card',
      style: 'opacity:0' 
    });
    var imageDiv = $('<img>', { 
      class: 'project-image',
      style: 'width:170px',
      alt: `${name} image`,
      src: imgSrc 
    });
    var cardBodyDiv = $('<div>', { class: 'card-body' });
    var nameDiv = $('<div>', { 
      class: 'project-name text-center',
      html: `<h3 class="text-truncate">${name}</h3>` 
    });
    var descDiv = $('<div>', { 
      class: 'meal-desc',
      text: `${desc.substring(0,150)}...` 
    });
    
    cardBodyDiv.append(nameDiv, descDiv);
    cardDiv.append(imageDiv, cardBodyDiv);
  
    return cardDiv;
  }
  function createCards() {
      for (var i = 0; i < projects.length; i++) {
          var name = projects[i].name;
          var imgSrc = projects[i].image;
          var desc = projects[i].description;
          var cardLink = $('<a>', {
              target: '_blank',
            href: projects[i].link        
          });
          var projectCard = createPortfolioCard(name, imgSrc, desc);
          $('.projects').append(cardLink.append(projectCard)).attr('style', 'text-align:center; justify-content: center');
            }            
    }
  $(document).ready(function(){
    $('.floatIn').each(function(){
        $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
      });
    anime.timeline({loop: true})
      .add({
        targets: '.floatIn .letter',
        translateX: [40,0],
        translateZ: 0,
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 6200,
        delay: function(el, i) {
          return 500 + 30 * i;
        }
        }).add({
            targets: '.floatIn .letter',
            translateX: [0,-30],
            opacity: [1,0],
            easing: "easeInExpo",
            duration: 6200,
            delay: function(el, i) {
              return 100 + 30 * i;
            }
            });
    createCards()
    $(window).scroll(function() {
        var hT = $('.projects').offset().top,
            hH = $('.projects').outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop();
        if ((wS < (hT+hH-wH+300))&&(wS > (hT+hH-wH-700))){
               var results = anime({
                   targets:'.project-card',
                   opacity: [1],
                   duration: 7000,
                   })
                }
        else {
               var results = anime({
                   targets:'.project-card',
                   opacity: [0],
                   duration: 7000,
                   })
                }
     });
  if ((mq1.matches)&&(mq1min.matches)) {
    $(window).scroll(function() {
        var hT = $('.projects').offset().top,
            hH = $('.projects').outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop();
        if ((wS < (hT+hH-wH+350))&&(wS > (hT+hH-wH-1000))){
               var results = anime({
                   targets:'.project-card',
                   opacity: [1],
                   duration: 7000,
                   })
                }
        else {
               var results = anime({
                   targets:'.project-card',
                   opacity: [0],
                   duration: 7000,
                   })
                }
     });
  }
  if ((mq2.matches)&&(mq2min.matches)) {
    $(window).scroll(function() {
        var hT = $('.projects').offset().top,
            hH = $('.projects').outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop();
        if ((wS < (hT+hH-wH+350))&&(wS > (hT+hH-wH-1200))){
               var results = anime({
                   targets:'.project-card',
                   opacity: [1],
                   duration: 7000,
                   })
                }
        else {
               var results = anime({
                   targets:'.project-card',
                   opacity: [0],
                   duration: 7000,
                   })
                }
     });
  }
  if ((mq3.matches)&&(mq3min.matches)) {
    $(window).scroll(function() {
        var hT = $('.projects').offset().top,
            hH = $('.projects').outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop();
        if ((wS < (hT+hH-wH+400))&&(wS > (hT+hH-wH-1200))){
               var results = anime({
                   targets:'.project-card',
                   opacity: [1],
                   duration: 7000,
                   })
                }
        else {
               var results = anime({
                   targets:'.project-card',
                   opacity: [0],
                   duration: 7000,
                   })
                }
     });
  }
  if (mq4.matches) {
    $(window).scroll(function() {
        var hT = $('.projects').offset().top,
            hH = $('.projects').outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop();
        if ((wS < (hT+hH-wH+200))&&(wS > (hT+hH-wH-3300))){
               var results = anime({
                   targets:'.project-card',
                   opacity: [1],
                   duration: 7000,
                   })
                }
        else {
               var results = anime({
                   targets:'.project-card',
                   opacity: [0],
                   duration: 7000,
                   })
                }
     });
  }
}) 