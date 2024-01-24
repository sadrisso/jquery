$('.container .h1').text('Heading one!');

$('.container1 #p1').text('Paragraph one!');

let variableOne = $('<p></p>').text('Hi');

$('#p1').before(variableOne);

$('.container .h1').css({'color': 'red', 'background-color': 'green'});


// document.querySelector('.btn').addEventListener('click', function () {
//     document.querySelector('.h2').innerHTML = 'clicked';
// });

$('.btnn').click(function(){
    $('.h2').text('clicked');
})

$('.myButton').click(function() {
    var value = this.innerHTML;
    $('.h3').text(value + ' is clicked');
})

$('.submitButton').click(function() {

    let value1 = $('#pass1').val();
    let value2 = $('#pass2').val();

    if(value1 != '' && value2 != ''){
        if(value1 == value2){
            alert('Successfuly login')
        }else{
            alert('Password mismatch')
        }
    }else{
        alert('Please enter a password')
    }

})


//jQuery for calculator

function insertNumber(num) {

    let existingNumber = $('#calHead').val();
    $('#calHead').val(existingNumber + num);
}

function clearResult() {
    $('#calHead').val("");
}