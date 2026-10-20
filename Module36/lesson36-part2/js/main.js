$('li').click(function(){
    alert('clicked')
})


$('#btn').click(function () {
    $('#h1').text('Testing text')
    $('#h1').appned('Extra text')
});

$('#btn2').on('click',function(){
    console.log('second button is clicked');
}