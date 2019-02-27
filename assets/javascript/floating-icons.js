$(document).ready(function() {
    var mq3min = window.matchMedia( "(min-width: 571px)" );
    var mq4 = window.matchMedia( "(max-width: 570px)" );
    if ((mq3min.matches)) {
        $('.floating-icons').html('<img class="html5 floating-icon" src="assets/images/html.png"><img class="css3 floating-icon" src="assets/images/css3.png"><img class="bootstrap floating-icon" src="assets/images/bootstrap.png"><img class="javascript floating-icon" src="assets/images/javascript.png"><img class="node floating-icon" src="assets/images/node.png"><img class="express floating-icon" src="assets/images/express.png"><img class="mongo floating-icon" src="assets/images/mongo.png"></img>')
        $('.html5').on('mouseenter', function() {
            anime({
                translateY: {
                    value: -65,
                    duration: 500
                },
                targets: '.html5',
                scale: {
                  value: 1.5,
                  duration: 500,
                  easing: 'easeInOutQuart'
                },
                direction: 'alternate',
                delay: 250
              });
        })
        $('.css3').on('mouseenter', function() {
            anime({
                translateY: {
                    value: -65,
                    duration: 500
                },
                targets: '.css3',
                scale: {
                  value: 1.5,
                  duration: 500,
                  easing: 'easeInOutQuart'
                },
                direction: 'alternate',
                delay: 250
              });
        })
        $('.bootstrap').on('mouseenter', function() {
            anime({
                translateY: {
                    value: -65,
                    duration: 500
                },
                targets: '.bootstrap',
                scale: {
                  value: 1.5,
                  duration: 500,
                  easing: 'easeInOutQuart'
                },
                direction: 'alternate',
                delay: 250
              });
        })
        $('.javascript').on('mouseenter', function() {
            anime({
                translateY: {
                    value: -65,
                    duration: 500
                },
                targets: '.javascript',
                scale: {
                  value: 1.5,
                  duration: 500,
                  easing: 'easeInOutQuart'
                },
                direction: 'alternate',
                delay: 250
              });
        })
        $('.node').on('mouseenter', function() {
            anime({
                translateY: {
                    value: -65,
                    duration: 500
                },
                targets: '.node',
                scale: {
                  value: 1.5,
                  duration: 500,
                  easing: 'easeInOutQuart'
                },
                direction: 'alternate',
                delay: 250
              });
        })
        $('.express').on('mouseenter', function() {
            anime({
                translateY: {
                    value: -65,
                    duration: 500
                },
                targets: '.express',
                scale: {
                  value: 1.5,
                  duration: 500,
                  easing: 'easeInOutQuart'
                },
                direction: 'alternate',
                delay: 250
              });
        })
        $('.mongo').on('mouseenter', function() {
            anime({
                translateY: {
                    value: -65,
                    duration: 500
                },
                targets: '.mongo',
                scale: {
                  value: 1.5,
                  duration: 500,
                  easing: 'easeInOutQuart'
                },
                direction: 'alternate',
                delay: 250
              });
        })
    }
    if (mq4.matches) {
        $('.floating-icons').html('<img class="html5 floatingImg" src="assets/images/html.png"><img class="css3 floatingImg" src="assets/images/css3.png"><img class="bootstrap floatingImg" src="assets/images/bootstrap.png"><img class="javascript floatingImg" src="assets/images/javascript.png"><img class="node floatingImg" src="assets/images/node.png"><img class="express floatingImg" src="assets/images/express.png"><img class="mongo floatingImg" src="assets/images/mongo.png"></img>')
        $('.floatingImg').attr('style', 'max-width:60px;max-height: 60px')
        setTimeout(function() {
        $(".html5").css("left", $(".html5").position().left).circulate({
            sizeAdjustment: 160,
            speed: 1900,
            width: -180,
            height: 5,
            loop: true,
            zIndexValues: [8, 49, 49, 8]
        });
        }, 100)
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
})
