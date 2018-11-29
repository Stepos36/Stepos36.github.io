let total = 0
let wins = 0
let losses = 0
var diamond1= getRandomInteger(1, 12)
    var diamond2= getRandomInteger(1, 12)
    var diamond3= getRandomInteger(1, 12)
    var diamond4= getRandomInteger(1, 12)
    let random = getRandomInteger(19, 120)

$( document ).ready(function() {
    
    newGame()
    $('#score').html(total)
    $("#rules").hide()
    $('#infoshow').on('click', function() {
        $("#rules").slideToggle()
    })
    $('#aim').html(random)


    $('#diamond1').on('click', function() {
        total = total + diamond1
        $('#score').html(total)
        checkResult()
    })
    $('#diamond2').on('click', function() {
        total = total + diamond2
        $('#score').html(total)
        checkResult()
    })
    $('#diamond3').on('click', function() {
        total = total + diamond3
        $('#score').html(total)
        checkResult()
    })
    $('#diamond4').on('click', function() {
        total = total + diamond4
        $('#score').html(total)
        checkResult()
    })
})
function getRandomInteger(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function checkResult() {
    if (total === random) {
        wins++
        $('#wins').html(wins)
        total = 0
        $('#score').html(total)
        alert('You win!')
        newGame()
    }
    if (total > random) {
        losses++
        $('#losses').html(losses)
        total = 0
        $('#score').html(total)
        alert('You lost!')
        newGame()
    }
}
function newGame() {
    diamond1= getRandomInteger(1, 12)
    diamond2= getRandomInteger(1, 12)
    diamond3= getRandomInteger(1, 12)
    diamond4= getRandomInteger(1, 12)
    random = getRandomInteger(19, 120)
    $('#aim').html(random)
    return [diamond1, diamond2, diamond3, diamond4, random]
}