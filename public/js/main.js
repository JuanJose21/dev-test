$(document).ready(function(){

    getApi();

    showSelect();

});

function validateSelect(){
    var response;
    var validateResponse = [];
    var validateArray;
    var valor;

    $(".selectPageOne").each(function(){
        valor = $(this).val();

        if(valor == "YES"){
            response = true;
        }else{
            response = false;
        }

        validateResponse.push(response);
    });

    validateArray = $.inArray(true, validateResponse);

    if(validateArray == -1){
        response = "FALSE";
    }else{
        response = "TRUE";
    }

    $(".consoleOutput").val("Question change: "+response);
}

/*
* Detectar cambio del select
*/
$(".selectPageOne").change(function(){
    validateSelect();
});

/*
* Consumir API
*/
function getApi(){
    $.ajax({
        type: 'GET',
        url: 'https://api.myjson.com/bins/17ocpi',
        success: function(response){
            var titulo;
            var texto;
            var imagen;
            var contador = 0;
            var active;

            $(".carousel-inner").html("");

            $.each(response, function () {            
                titulo = this.title;
                texto = this.text;
                imagen = this.image;

                if(contador == 0){
                    active = 'active';
                }else{
                    active = '';
                }

                $(".carousel-inner").append('<div class="carousel-item ' + active +' "><img class="d-block img-fluid" id="carousel' + contador + '" src=" ' + imagen + ' " alt="Slide' + contador + '"><div class="carousel-caption "><h5 class="title-slide" id="title' + contador + '"> ' + titulo + ' </h5><p class="text-slide" id=""> ' + texto + ' </p></div></div>"');
                
                contador++;
            });
        },
        dataType: 'json'
    })//end ajax
    return false;
}

/*
* Cargar los select
*/
function showSelect(){

    $(".selectPageOne").html("");

    $(".selectPageOne").each(function(){
        $(this).append("<option value='YES'>YES</option>");
        $(this).append("<option value='NO'>NO</option>");
    });
}


$('.anclaScroll').click(function(e){               
    e.preventDefault();
    var ancla = $(this).attr('href');

    $('body,html').stop(true,true).animate({                
        scrollTop: $(ancla).offset().top
    },1000);
});