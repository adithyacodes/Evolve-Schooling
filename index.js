
var height = $('#header').height();

$(window).scroll( function()
{
 if($(this).scrollTop() > height)
 

$('#nav').addClass('sticky');
 

 else
$('#nav').removeClass('sticky');
 }
);


$('.btn').click(()=>
{
    alert('clicked');
})



