//check span if even
$('span:even').css('color', 'red');

//add new element
$('p').each(function(index, element) {
    var button = '<button class="btn" data-tmp="' + index + '">Click me</button>'
    $(element).append(button)
});

//add event hendlers
$('button').click(function() {
    alert($(this).attr('data-tmp'));
});