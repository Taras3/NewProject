//$('.banner-menu-bottom a').click(function(){
//        let name = $(this).text() ;
//console.log(name)
//        $('.nav a span').text(name)
//                                 })


$('.title-slider, header').click(function(){
    $('.nav').css({
        display: 'none',
    }) 
})

$('.banner-menu-bottom .menu li').click(function(){
    $('.nav').css({
        display: 'block',
    })
    let name = ["Трускавці", "Східниці", "Моршині", "Закарпатті", "Хмельнику", "Миргороді", "Станові", "Карпатах", "Львові"];
    let num = $(this).index() ;
    
    $('.nav a span').text(name[num])
    
})



let divH = $('.item:nth-child(3) .text').height();
console.log(divH)
$('.item .text').css({
    height: divH,
})


