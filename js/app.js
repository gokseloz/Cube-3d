let x = 0, bool = true, interval;

const rotate = () => {
    $(".cube").each(function () {
        $(this).css("transform", `rotateY(${-x}deg)`)
    })
}

const changeIcon = () => {
    const i = $(".play-pause  i");
    if(i.hasClass("fa-play")){
        i.removeClass("fa-play")
        i.addClass("fa-pause")
    }
    else{
        i.addClass("fa-play")
        i.removeClass("fa-pause")
    }
}

const slideAuto = () => {
    if(bool){
        interval = setInterval(() => {
            x += 90;
            rotate();
        }, 2000);
        changeIcon()
        bool = false;
    }
 
    else{
        clearInterval(interval)
        changeIcon()
        bool = true;
    }
}

$(".right-arrow").on("click", () => {
    x += 90;
    rotate();
    if(bool == false){
        slideAuto()
    }
})
$(".left-arrow").on("click", () => {
    x -= 90;
    clearInterval(interval)
    rotate();
    if(bool == false){
        slideAuto()
    }
})

$(".play-pause").on("click", () => {
    slideAuto()
})

