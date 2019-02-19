$(document).ready(function(){

    getApi();

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

                $(".carousel-inner").append('<div class="carousel-item ' + active +' "><img class="d-block w-100" id="carousel' + contador + '" src=" ' + imagen + ' " alt="Slide' + contador + '"><div class="carousel-caption "><h5 class="title-slide" id="title' + contador + '"> ' + titulo + ' </h5><p class="text-slide" id=""> ' + texto + ' </p></div></div>"');
                
                contador++;
            });
        },
        dataType: 'json'
    })//end ajax
    return false;
}