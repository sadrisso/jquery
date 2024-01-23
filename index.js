$('.container .h1').text('Heading one!');

$('.container1 #p1').text('Paragraph one!');

let variableOne = $('<p></p>').text('Hi');

$('#p1').before(variableOne);

$('.container .h1').css({'color': 'red', 'background-color': 'green'});


// document.querySelector('.btn').addEventListener('click', function () {
//     document.querySelector('.h2').innerHTML = 'clicked';
// });

$('.btn').click(function(){
    $('.h2').text('clicked');
})

$('.myButton').click(function() {
    let value = this.innerHTML;
    $('.h3').text(value + 'is clicked');
})