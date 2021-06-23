var sliderparts = {

    "1": {

        "title": "Videojuegos",
        "desc": "que te alegran la existencia."

    },

    "2": {

        "title": "''LAS BASES DE LA PROGRAMACIÓN''",
        "desc": "y otras series más en mi canal de Youtube ''JMIDEV''."

    }

}

var currentslider = 1;

var slidermainroot;

var title;
var desc;
var img;
var bg;

function changeslid(quantity){

    if(quantity == "+1"){

        currentslider += 1;

    }

    else if(quantity == "-1"){

        currentslider -= 1;

    }

    if(currentslider < 1){

        currentslider = 2;

    }

    else if(currentslider > 2){

        currentslider = 1;

    }

    slidermainroot = currentslider;

    title = sliderparts[slidermainroot].title;
    desc = sliderparts[slidermainroot].desc;
    img = "sliderimgs/" + currentslider + "/sliderimg.png";
    bg = "sliderimgs/" + currentslider + "/sliderbg.jpg";

    console.log(title);
    console.log(desc);
    console.log(img);
    console.log(bg);

    document.querySelector(".slidercontentinside h1").innerHTML = title;
    document.querySelector(".slidercontentinside h2").innerHTML = desc;

    $(".bgslider").css("background", "url("+ bg +")");
    $(".bgslider").css("background-size", "cover");
    $(".bgslider").css("background-repeat", "no-repeat");
    $(".bgslider").css("background-position", "center");

    $(".imgslider").css("background", "url("+ img +")");
    $(".imgslider").css("background-repeat", "no-repeat");
    $(".imgslider").css("background-position", "center");
    $(".imgslider").css("background-size", "contain");

    const puntitosprogress = document.querySelectorAll(".puntosprogresoslider");

    for(let puntosprogresoslider of puntitosprogress){

        if(puntosprogresoslider.id == currentslider){

            $(puntosprogresoslider).css("opacity", "1");
    
        }

        else{

            $(puntosprogresoslider).css("opacity", "0.5");

        }

    }
    
    /*if(puntitosprogress.id > currentslider){

        $(".puntosprogresoslider").css("opacity", "0.5");

    }

    else{

        $(".puntosprogresoslider").css("opacity", "0.5");

    }*/

}

changeslid();

function cambioauto(){

    changeslid("+1");

}

var intervalocambio = window.setInterval(cambioauto, 12 * 1000);