$(document).ready(function () {
    
    for(i=0;i<1000;i++){
    $('#note').animate({opacity:0},2000)
    $('#note').animate({opacity:1},2000)
    }

    $('#h1').click(function () {
        $('#h1').text("You Clicked....")
    })

  

    $('#h1').dblclick(function () {
        $('#h1').text("You Double Clicked.....")
    })

    $('#h1').hover(function () {

        $('#h1').text("Mouse Hovered......")

    })

    $('body').keydown(function () {
        $('#h1').text("You Pressed Down Arrow Key....")
    })


    $('body').keyup(function () {
        $('#h1').text("You Pressed Up Arrow Key...")
    })

    
    
    $('body').keypress(function () {
        $('#h1').text("You Pressed A Key...")
    })



    $('#hide1').click(function () {
        $('#text').hide(1000)
    })
    $('#hide2').click(function () {
        $('#text').hide(2000)
    })
    $('#hide3').click(function () {
        $('#text').hide(3000)
    })
    $('#hide4').click(function () {
        $('#text').hide(4000)
    })
    $('#hide5').click(function () {
        $('#text').hide(5000)
    })
    $('#fadehide1').click(function () {
        $('#text').fadeOut(1000)
    })
    $('#fadehide2').click(function () {
        $('#text').fadeOut(2000)
    })
    $('#fadehide3').click(function () {
        $('#text').fadeOut(3000)
    })
    $('#fadehide4').click(function () {
        $('#text').fadeOut(4000)
    })
    $('#fadehide5').click(function () {
        $('#text').fadeOut(5000)
    })
    $('#slidehide1').click(function () {
        $('#text').slideUp(1000)
    })
    $('#slidehide2').click(function () {
        $('#text').slideUp(2000)
    })
    $('#slidehide3').click(function () {
        $('#text').slideUp(3000)
    })
    $('#slidehide4').click(function () {
        $('#text').slideUp(4000)
    })
    $('#slidehide5').click(function () {
        $('#text').slideUp(5000)
    })




    $('#show1').click(function () {
        $('#text').show(1000)
    })
    $('#show2').click(function () {
        $('#text').show(2000)
    })
    $('#show3').click(function () {
        $('#text').show(3000)
    })
    $('#show4').click(function () {
        $('#text').show(4000)
    })
    $('#show5').click(function () {
        $('#text').show(5000)
    })
    $('#fadeshow1').click(function () {
        $('#text').fadeIn(1000)
    })
    $('#fadeshow2').click(function () {
        $('#text').fadeIn(2000)
    })
    $('#fadeshow3').click(function () {
        $('#text').fadeIn(3000)
    })
    $('#fadeshow4').click(function () {
        $('#text').fadeIn(4000)
    })
    $('#fadeshow5').click(function () {
        $('#text').fadeIn(5000)
    })
    $('#slideshow1').click(function () {
        $('#text').slideDown(1000)
    })
    $('#slideshow2').click(function () {
        $('#text').slideDown(2000)
    })
    $('#slideshow3').click(function () {
        $('#text').slideDown(3000)
    })
    $('#slideshow4').click(function () {
        $('#text').slideDown(4000)
    })
    $('#slideshow5').click(function () {
        $('#text').slideDown(5000)
    })
    

    $('#colo1').click(function () {
        $('#text').css('color', 'red')
    })
    $('#colo2').click(function () {
        $('#text').css('color', 'green')
    })
    $('#colo3').click(function () {
        $('#text').css('color', 'blue')
    })
    $('#colo4').click(function () {
        $('#text').css('color', 'black')
    })
    $('#colo5').click(function () {
        $('#text').css('color', 'purple')
    })
    $('#colo6').click(function () {
        $('#text').css('color', 'pink')
    })
    $('#colo7').click(function () {
        $('#text').css('color', 'orange')
    })
    $('#colo8').click(function () {
        $('#text').css('color', 'white')
    })


    $('#back1').click(function () {
        $('#text').css('background-color', 'red')
    })
    $('#back2').click(function () {
        $('#text').css('background-color', 'green')
    })
    $('#back3').click(function () {
        $('#text').css('background-color', 'blue')
    })
    $('#back4').click(function () {
        $('#text').css('background-color', 'black')
    })
    $('#back5').click(function () {
        $('#text').css('background-color', 'purple')
    })
    $('#back6').click(function () {
        $('#text').css('background-color', 'pink')
    })
    $('#back7').click(function () {
        $('#text').css('background-color', 'orange')
    })
    $('#back8').click(function () {
        $('#text').css('background-color', 'white')
    })


    $('#op1').click(function () {
        $('#text').animate({ opacity: 0 })
    })
    $('#op2').click(function () {
        $('#text').animate({ opacity: 0.1 })
    })
    $('#op3').click(function () {
        $('#text').animate({ opacity: 0.2 })
    })
    $('#op4').click(function () {
        $('#text').animate({ opacity: 0.3 })
    })
    $('#op5').click(function () {
        $('#text').animate({ opacity: 0.4 })
    })
    $('#op6').click(function () {
        $('#text').animate({ opacity: 0.5 })
    })
    $('#op7').click(function () {
        $('#text').animate({ opacity: 1 })
    })

    
    $('#0opsec1').click(function () {
        $('#text').animate({ opacity: 0 },1000)
    })
    $('#0opsec2').click(function () {
        $('#text').animate({ opacity: 0 },2000)
    })
    $('#0opsec3').click(function () {
        $('#text').animate({ opacity: 0 },3000)
    })
    $('#0opsec4').click(function () {
        $('#text').animate({ opacity: 0 },4000)
    })
    $('#0opsec5').click(function () {
        $('#text').animate({ opacity: 0 },5000)
    })
   

    $('#01op1').click(function () {
        $('#text').animate({ opacity: 0.1 },1000)
    })
    $('#01op2').click(function () {
        $('#text').animate({ opacity: 0.1 },2000)
    })
    $('#01op3').click(function () {
        $('#text').animate({ opacity: 0.1 },3000)
    })
    $('#01op4').click(function () {
        $('#text').animate({ opacity: 0.1 },4000)
    })
    $('#01op5').click(function () {
        $('#text').animate({ opacity: 0.1 },5000)
    })
  

    $('#02op1').click(function () {
        $('#text').animate({ opacity: 0.2 },1000)
    })
    $('#02op2').click(function () {
        $('#text').animate({ opacity: 0.2 },2000)
    })
    $('#02op3').click(function () {
        $('#text').animate({ opacity: 0.2 },3000)
    })
    $('#02op4').click(function () {
        $('#text').animate({ opacity: 0.2 },4000)
    })
    $('#02op5').click(function () {
        $('#text').animate({ opacity: 0.2 },5000)
    })


    $('#03op1').click(function () {
        $('#text').animate({ opacity: 0.3 },1000)
    })
    $('#03op2').click(function () {
        $('#text').animate({ opacity: 0.3 },2000)
    })
    $('#03op3').click(function () {
        $('#text').animate({ opacity: 0.3 },3000)
    })
    $('#03op4').click(function () {
        $('#text').animate({ opacity: 0.3 },4000)
    })
    $('#03op5').click(function () {
        $('#text').animate({ opacity: 0.3 },5000)
    })


    $('#04op1').click(function () {
        $('#text').animate({ opacity: 0.4 },1000)
    })
    $('#04op2').click(function () {
        $('#text').animate({ opacity: 0.4 },2000)
    })
    $('#04op3').click(function () {
        $('#text').animate({ opacity: 0.4},3000)
    })
    $('#04op4').click(function () {
        $('#text').animate({ opacity: 0.4 },4000)
    })
    $('#04op5').click(function () {
        $('#text').animate({ opacity: 0.4 },5000)
    })


    $('#05op1').click(function () {
        $('#text').animate({ opacity: 0.5 },1000)
    })
    $('#05op2').click(function () {
        $('#text').animate({ opacity: 0.5 },2000)
    })
    $('#05op3').click(function () {
        $('#text').animate({ opacity: 0.5},3000)
    })
    $('#05op4').click(function () {
        $('#text').animate({ opacity: 0.5 },4000)
    })
    $('#05op5').click(function () {
        $('#text').animate({ opacity: 0.5 },5000)
    })


    $('#1op1').click(function () {
        $('#text').animate({ opacity: 1 },1000)
    })
    $('#1op2').click(function () {
        $('#text').animate({ opacity: 1 },2000)
    })
    $('#1op3').click(function () {
        $('#text').animate({ opacity: 1},3000)
    })
    $('#1op4').click(function () {
        $('#text').animate({ opacity: 1 },4000)
    })
    $('#1op5').click(function () {
        $('#text').animate({ opacity: 1 },5000)
    })


    $('#w100').click(function () {
        $('#text').animate({ width: '100px' },2000)
    })
    $('#w200').click(function () {
        $('#text').animate({ width: '200px' },2000)
    })
    $('#w300').click(function () {
        $('#text').animate({ width: '300px' },2000)
    })
    $('#w400').click(function () {
        $('#text').animate({ width: '400px' },2000)
    })
    $('#w500').click(function () {
        $('#text').animate({ width: '500px' },2000)
    })


    $('#h100').click(function () {
        $('#text').animate({ height:'100px' },2000)
    })
    $('#h200').click(function () {
        $('#text').animate({ height: '200px' }, 2000)
    })
    $('#300').click(function () {
        $('#text').animate({ height: '300px' }, 2000)
    })
    $('#h400').click(function () {
        $('#text').animate({ height: '400px' }, 2000)
    })
    $('#h500').click(function () {
        $('#text').animate({ height: '500px' }, 2000)
    })


    $('#ct0').click(function () {
        $('#text').text('Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi minus facere nihil ratione voluptatem molestias, unde id iste sunt esse illo facilis officia, totam, atque iure quod fugit reiciendis voluptate.Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi minus facere nihil ratione voluptatem molestias, unde id iste sunt esse illo facilis officia, totam, atque iure quod fugit reiciendis voluptate.Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi minus facere nihil ratione voluptatem molestias, unde id iste sunt esse illo facilis officia, totam, atque iure quod fugit reiciendis voluptate.',2000)
    })
    $('#ct1').click(function () {
        $('#text').text('HI',2000)
    })
    $('#ct2').click(function () {
        $('#text').text('HELLO',2000)
    })
    $('#ct3').click(function () {
        $('#text').text('GOOD MORNING',2000)
    })
    $('#ct4').click(function () {
        $('#text').text('GOOD EVENING',2000)
    })


    $('#imgbc1').click(function () {
        $('#pic').css('background-color','red',2000)
    })
    $('#imgbc2').click(function () {
        $('#pic').css('background-color','green',2000)
    })
    $('#imgbc3').click(function () {
        $('#pic').css('background-color','blue',2000)
    })
    $('#imgbc4').click(function () {
        $('#pic').css('background-color','black',2000)
    })
    $('#imgbc5').click(function () {
        $('#pic').css('background-color','purple',2000)
    })
    $('#imgbc6').click(function () {
        $('#pic').css('background-color','pink',2000)
    })
    $('#imgbc7').click(function () {
        $('#pic').css('background-color','orange',2000)
    })
    $('#imgbc8').click(function () {
        $('#pic').css('background-color','white',2000)
    })


    $('#imgw1').click(function () {
        $('#pic').animate({ width: '100px' },2000)
    })
    $('#imgw2').click(function () {
        $('#pic').animate({ width: '200px' },2000)
    })
    $('#imgw3').click(function () {
        $('#pic').animate({ width: '300px' },2000)
    })
    $('#imgw4').click(function () {
        $('#pic').animate({ width: '400px' },2000)
    })
    $('#imgw5').click(function () {
        $('#pic').animate({ width: '500px' },2000)
    })


    $('#imgh1').click(function () {
        $('#pic').animate({ height:'100px' },2000)
    })
    $('#imgh2').click(function () {
        $('#pic').animate({ height:'200px' },2000)
    })
    $('#imgh3').click(function () {
        $('#pic').animate({ height:'300px' },2000)
    })
    $('#imgh4').click(function () {
        $('#pic').animate({ height:'400px' },2000)
    })
    $('#imgh5').click(function () {
        $('#pic').animate({ height:'500px' },2000)
    })


    
    $('#imgop0').click(function () {
        $('#pic').animate({ opacity: 0 },2000)
    })
    $('#imgop1').click(function () {
        $('#pic').animate({ opacity: 0.1 },2000)
    })
    $('#imgop2').click(function () {
        $('#pic').animate({ opacity: 0.2 },2000)
    })
    $('#imgop3').click(function () {
        $('#pic').animate({ opacity: 0.3 },2000)
    })
    $('#imgop4').click(function () {
        $('#pic').animate({ opacity: 0.4 },2000)
    })
    $('#imgop5').click(function () {
        $('#pic').animate({ opacity: 0.5 },2000)
    })
    $('#imgop6').click(function () {
        $('#pic').animate({ opacity: 1 },2000)
    })

})