console.log('🟥 🟦 🟩 🟨');
$(document).ready(onReady)

function onReady(){
    $('#red-btn').on('click',appendRed)
    $('#blue-btn').on('click',appendBlue)
    $('#green-btn').on('click',appendGreen)
    $('#yellow-btn').on('click',appendYellow)
    // $('#blocks').on('click','.block',sorryRed)
    $('#blocks').on('click','.block',sorryBlocks)
    
}
let red = 1 
let blue = 1
let gr = 1
let yl = 1
function appendRed(){

    $('#blocks').append('<div class="block red-fill"></div>')
    $('#red-count').empty()
    red++
    $('#red-count').append(red)
   
}
function appendBlue(){
    $('#blocks').append('<div class="block blue-fill"></div>')
    $('#blue-count').empty()
    blue++
    $('#blue-count').append(blue)
}
function appendGreen(){
    $('#blocks').append('<div class="block green-fill"></div>')
    $('#green-count').empty()
    gr++
    $('#green-count').append(gr)
}
function appendYellow(){
    $('#blocks').append('<div class="block yellow-fill"></div>')
    $('#yellow-count').empty()
    yl++
    $('#yellow-count').append(yl)
}


function sorryBlocks(){
    $(this).remove()

}