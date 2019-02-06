$(document).ready(function() {
    var mq1 = window.matchMedia( "(max-width: 1198px)" );
    var mq1min = window.matchMedia( "(min-width: 993px)" );
    var mq2 = window.matchMedia( "(max-width: 992px)" );
    var mq2min = window.matchMedia( "(min-width: 769px)" );
    var mq3 = window.matchMedia( "(max-width: 768px)" );
    var mq3min = window.matchMedia( "(min-width: 571px)" );
    var mq4 = window.matchMedia( "(max-width: 570px)" );
    if ((mq1.matches)&&(mq1min.matches)) {
        $(".html5").css("left", $(".html5").position().left).circulate({
            sizeAdjustment: 160,
            speed: 1900,
            width: -320,
            height: 50,
            loop: true,
            zIndexValues: [8, 49, 49, 8]
        });
        setTimeout(function() {
        $(".css3").css("left", $(".css3").position().left).circulate({
            sizeAdjustment: 160,
            speed: 1900,
            width: -320,
            height: 50,
            loop: true,
            zIndexValues: [7, 50, 50, 7]
        });
        },1150)
        setTimeout(function() {
        $(".bootstrap").css("left", $(".bootstrap").position().left).circulate({
            sizeAdjustment: 160,
            speed: 1900,
            width: -320,
            height: 50,
            loop: true,
            zIndexValues: [6, 51, 51, 6]
        });
        },2300)
        setTimeout(function() {
        $(".javascript").css("left", $(".javascript").position().left).circulate({
            sizeAdjustment: 160,
            speed: 1900,
            width: -320,
            height: 50,
            loop: true,
            zIndexValues: [5, 52, 52, 5]
        });
        },3450)
        setTimeout(function() {
        $(".node").css("left", $(".node").position().left).circulate({
            sizeAdjustment: 160,
            speed: 1900,
            width: -320,
            height: 50,
            loop: true,
            zIndexValues: [4, 53, 53, 4]
        });
        },4600)
        setTimeout(function() {
        $(".express").css("left", $(".express").position().left).circulate({
            sizeAdjustment: 160,
            speed: 1900,
            width: -320,
            height: 50,
            loop: true,
            zIndexValues: [3, 54, 54, 3]
        });
        },5750)
        setTimeout(function() {
        $(".mongo").css("left", $(".mongo").position().left).circulate({
            sizeAdjustment: 160,
            speed: 1900,
            width: -320,
            height: 50,
            loop: true,
            zIndexValues: [2, 55, 55, 2]
        });
        },6700)
        }
    if ((mq2.matches)&&(mq2min.matches)) {
        $('.floatingImg').attr('style', 'max-width:90px;max-height: 90px')
        $(".html5").css("left", $(".html5").position().left).circulate({
            sizeAdjustment: 160,
            speed: 1900,
            width: -270,
            height: 20,
            loop: true,
            zIndexValues: [8, 49, 49, 8]
        });
        setTimeout(function() {
        $(".css3").css("left", $(".css3").position().left).circulate({
            sizeAdjustment: 160,
            speed: 1900,
            width: -270,
            height: 20,
            loop: true,
            zIndexValues: [7, 50, 50, 7]
        });
        },1150)
        setTimeout(function() {
        $(".bootstrap").css("left", $(".bootstrap").position().left).circulate({
            sizeAdjustment: 160,
            speed: 1900,
            width: -270,
            height: 20,
            loop: true,
            zIndexValues: [6, 51, 51, 6]
        });
        },2300)
        setTimeout(function() {
        $(".javascript").css("left", $(".javascript").position().left).circulate({
            sizeAdjustment: 160,
            speed: 1900,
            width: -270,
            height: 20,
            loop: true,
            zIndexValues: [5, 52, 52, 5]
        });
        },3450)
        setTimeout(function() {
        $(".node").css("left", $(".node").position().left).circulate({
            sizeAdjustment: 160,
            speed: 1900,
            width: -270,
            height: 20,
            loop: true,
            zIndexValues: [4, 53, 53, 4]
        });
        },4600)
        setTimeout(function() {
        $(".express").css("left", $(".express").position().left).circulate({
            sizeAdjustment: 160,
            speed: 1900,
            width: -270,
            height: 20,
            loop: true,
            zIndexValues: [3, 54, 54, 3]
        });
        },5750)
        setTimeout(function() {
        $(".mongo").css("left", $(".mongo").position().left).circulate({
            sizeAdjustment: 160,
            speed: 1900,
            width: -270,
            height: 20,
            loop: true,
            zIndexValues: [2, 55, 55, 2]
        });
        },6700)
    }
    if ((mq3.matches)&&(mq3min.matches)) {
        $('.floatingImg').attr('style', 'max-width:60px;max-height: 60px')
        $(".html5").css("left", $(".html5").position().left).circulate({
            sizeAdjustment: 160,
            speed: 1900,
            width: -300,
            height: 10,
            loop: true,
            zIndexValues: [8, 49, 49, 8]
        });
        setTimeout(function() {
        $(".css3").css("left", $(".css3").position().left).circulate({
            sizeAdjustment: 160,
            speed: 1900,
            width: -300,
            height: 10,
            loop: true,
            zIndexValues: [7, 50, 50, 7]
        });
        },1150)
        setTimeout(function() {
        $(".bootstrap").css("left", $(".bootstrap").position().left).circulate({
            sizeAdjustment: 160,
            speed: 1900,
            width: -300,
            height: 10,
            loop: true,
            zIndexValues: [6, 51, 51, 6]
        });
        },2300)
        setTimeout(function() {
        $(".javascript").css("left", $(".javascript").position().left).circulate({
            sizeAdjustment: 160,
            speed: 1900,
            width: -300,
            height: 10,
            loop: true,
            zIndexValues: [5, 52, 52, 5]
        });
        },3450)
        setTimeout(function() {
        $(".node").css("left", $(".node").position().left).circulate({
            sizeAdjustment: 160,
            speed: 1900,
            width: -300,
            height: 10,
            loop: true,
            zIndexValues: [4, 53, 53, 4]
        });
        },4600)
        setTimeout(function() {
        $(".express").css("left", $(".express").position().left).circulate({
            sizeAdjustment: 160,
            speed: 1900,
            width: -300,
            height: 10,
            loop: true,
            zIndexValues: [3, 54, 54, 3]
        });
        },5750)
        setTimeout(function() {
        $(".mongo").css("left", $(".mongo").position().left).circulate({
            sizeAdjustment: 160,
            speed: 1900,
            width: -300,
            height: 10,
            loop: true,
            zIndexValues: [2, 55, 55, 2]
        });
        },6700)
    }
    if (mq4.matches) {
        $('.floatingImg').attr('style', 'max-width:60px;max-height: 60px')
        $(".html5").css("left", $(".html5").position().left).circulate({
            sizeAdjustment: 160,
            speed: 1900,
            width: -180,
            height: 5,
            loop: true,
            zIndexValues: [8, 49, 49, 8]
        });
        setTimeout(function() {
        $(".css3").css("left", $(".css3").position().left).circulate({
            sizeAdjustment: 160,
            speed: 1900,
            width: -180,
            height: 5,
            loop: true,
            zIndexValues: [7, 50, 50, 7]
        });
        },1150)
        setTimeout(function() {
        $(".bootstrap").css("left", $(".bootstrap").position().left).circulate({
            sizeAdjustment: 160,
            speed: 1900,
            width: -180,
            height: 5,
            loop: true,
            zIndexValues: [6, 51, 51, 6]
        });
        },2300)
        setTimeout(function() {
        $(".javascript").css("left", $(".javascript").position().left).circulate({
            sizeAdjustment: 160,
            speed: 1900,
            width: -180,
            height: 5,
            loop: true,
            zIndexValues: [5, 52, 52, 5]
        });
        },3450)
        setTimeout(function() {
        $(".node").css("left", $(".node").position().left).circulate({
            sizeAdjustment: 160,
            speed: 1900,
            width: -180,
            height: 5,
            loop: true,
            zIndexValues: [4, 53, 53, 4]
        });
        },4600)
        setTimeout(function() {
        $(".express").css("left", $(".express").position().left).circulate({
            sizeAdjustment: 160,
            speed: 1900,
            width: -180,
            height: 5,
            loop: true,
            zIndexValues: [3, 54, 54, 3]
        });
        },5750)
        setTimeout(function() {
        $(".mongo").css("left", $(".mongo").position().left).circulate({
            sizeAdjustment: 160,
            speed: 1900,
            width: -180,
            height: 5,
            loop: true,
            zIndexValues: [2, 55, 55, 2]
        });
        },6700)
    }
    else{
        $('.floatingImg').attr('style', 'max-width:100px;max-height: 100px')
$(".html5").css("left", $(".html5").position().left).circulate({
    sizeAdjustment: 160,
    speed: 1900,
    width: -420,
    height: 50,
    loop: true,
    zIndexValues: [8, 49, 49, 8]
});
setTimeout(function() {
$(".css3").css("left", $(".css3").position().left).circulate({
    sizeAdjustment: 160,
    speed: 1900,
    width: -420,
    height: 50,
    loop: true,
    zIndexValues: [7, 50, 50, 7]
});
},1150)
setTimeout(function() {
$(".bootstrap").css("left", $(".bootstrap").position().left).circulate({
    sizeAdjustment: 160,
    speed: 1900,
    width: -420,
    height: 50,
    loop: true,
    zIndexValues: [6, 51, 51, 6]
});
},2300)
setTimeout(function() {
$(".javascript").css("left", $(".javascript").position().left).circulate({
    sizeAdjustment: 160,
    speed: 1900,
    width: -420,
    height: 50,
    loop: true,
    zIndexValues: [5, 52, 52, 5]
});
},3450)
setTimeout(function() {
$(".node").css("left", $(".node").position().left).circulate({
    sizeAdjustment: 160,
    speed: 1900,
    width: -420,
    height: 50,
    loop: true,
    zIndexValues: [4, 53, 53, 4]
});
},4600)
setTimeout(function() {
$(".express").css("left", $(".express").position().left).circulate({
    sizeAdjustment: 160,
    speed: 1900,
    width: -420,
    height: 50,
    loop: true,
    zIndexValues: [3, 54, 54, 3]
});
},5750)
setTimeout(function() {
$(".mongo").css("left", $(".mongo").position().left).circulate({
    sizeAdjustment: 160,
    speed: 1900,
    width: -420,
    height: 50,
    loop: true,
    zIndexValues: [2, 55, 55, 2]
});
},6700)
};
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
var projects = [    {   name: 'Spice It Up' ,
                        image: 'assets/images/projects/spice-it-up/spice-it-up.png',
                        description: 'This app allows the user to search different ingredients and obtain recipes. Along with recipes, the user is able to search required ingredients on Amazon Fresh. With this information the user can easily order the ingredients and have a spicy meal.',
                        link: 'http://stepos36.github.io/Spice-It'
                    },
                    {   name: 'Hangman game' ,
                        image: 'assets/images/projects/word-guess-game/bg-shows.png',
                        description: 'A basic Hangman Game to check your TV shows knowledge',
                        link: 'http://stepos36.github.io/Word-Guess-Game'
                    },
                    {   name: 'LIRI node application' ,
                        image: 'assets/images/projects/liri-node-app/liri.png',
                        description: "LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.",
                        link: 'https://github.com/Stepos36/liri-node-app'
                    },
                    {   name: 'Trivia Game' ,
                        image: 'assets/images/projects/trivia/trivia.png',
                        description: 'In this game you get to pick one of 4 different themes and test your knowledge on Cars, TV shows, History or Games.',
                        link: 'http://stepos36.github.io/TriviaGame'
                    },
                    {   name: 'Rock-Paper-Scissors game' ,
                        image: 'assets/images/projects/rps/icon.png',
                        description: 'Classic rock-paper-scissors multiplayer game. Enjoy playing it with your friends!',
                        link: 'http://stepos36.github.io/RPS-Multiplayer'
                    }
            ]
})
