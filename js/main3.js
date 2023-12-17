






var square = document.querySelector(".square1");
var btnFast = document.querySelector(".fast");
var btnSlow = document.querySelector(".slow");

btnFast.addEventListener("click" , function(){
    square.style.transform = `translateX(1030px)`;
    square.style.transition = 'all 1s '

    // btnFast.addEventListener("click" , function(){
    //     square.style.transform = `translateX(0px)`;
    // })


    setTimeout (function(){
        square.style.transform = `translateX(0px)`;
    } ,1400)
})


btnSlow.addEventListener("click" , function(){
    square.style.transform = `translateX(1030px)`;
    square.style.transition = "all 3s"
    // btnSlow.addEventListener("click" , function(){
    //     square.style.transform = `translateX(0px)`;
        
    // })
    setTimeout (function(){
        square.style.transform = `translateX(0px)`;
    } ,3100)
})


