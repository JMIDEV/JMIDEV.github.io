var categ = "juegoall";

function changecategory(categoryname){

    $(".adelprojectbtn").css("display", "none");

    if(categoryname == "juegoall"){

        $(".adelprojectbtn").css("display", "inline");

    }

    else{

        $(document.querySelectorAll("#" + categoryname)).css("display", "inline");

    }

    if(categoryname == "juegoall"){

        $(".tagbtnslect").css("background", "rgb(31, 31, 43)");
        $("#tagall").css("background", "linear-gradient(141deg, rgba(110,99,180,1) 0%, rgba(198,198,198,1) 100%)");

    }

    else if(categoryname == "juegoaventura"){

        $(".tagbtnslect").css("background", "rgb(31, 31, 43)");
        $("#tagjuegoaventura").css("background", "linear-gradient(141deg, rgba(26,191,39,1) 0%, rgba(0,255,188,1) 100%)");

    }

    else if(categoryname == "juegocasual"){

        $(".tagbtnslect").css("background", "rgb(31, 31, 43)");
        $("#tagjuegocasual").css("background", "linear-gradient(141deg, rgb(255, 153, 69) 0%, rgb(255, 238, 0) 100%)");

    }

    else if(categoryname == "juegogamejam"){

        $(".tagbtnslect").css("background", "rgb(31, 31, 43)");
        $("#tagjuegogamejam").css("background", "linear-gradient(141deg, rgb(75, 132, 255) 0%, rgb(0, 225, 255) 100%)");

    }

    else if(categoryname == "juegoexperiment"){

        $(".tagbtnslect").css("background", "rgb(31, 31, 43)");
        $("#tagjuegoexperiment").css("background", "linear-gradient(141deg, rgb(170, 80, 223) 0%, rgb(255, 59, 239) 100%)");

    }

    else if(categoryname == "utilidadesproj"){

        $(".tagbtnslect").css("background", "rgb(31, 31, 43)");
        $("#tagutilidadesproj").css("background", "linear-gradient(141deg, rgba(255,79,186,1) 0%, rgba(255,166,0,1) 100%)");

    }

    categ = categoryname;

}

function hovertag(element){

    if(categ != "juegoall"){

        if(element.id != "tag" + categ){

            $(element).css("background", "linear-gradient(328deg, rgba(41,43,65,1) 0%, rgba(99,100,152,1) 100%)");

        }

    }

    else{

        if(element.id != "tagall"){

            $(element).css("background", "linear-gradient(328deg, rgba(41,43,65,1) 0%, rgba(99,100,152,1) 100%)");

        }

    }

}

function unhovertag(element){

    if(categ != "juegoall"){

        if(element.id != "tag" + categ){

            $(element).css("background", "rgb(31, 31, 43)");

        }

    }

    else{

        if(element.id != "tagall"){

            $(element).css("background", "rgb(31, 31, 43)");

        }

    }

}

changecategory('juegoall');