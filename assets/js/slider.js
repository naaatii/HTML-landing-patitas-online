//creo mi array de imgs
var slider= new Array ("0.png","1.png","2.png","3.png","4.png");

//creo una variable para recorrer el array
var siguiente=0;

//creo una funcion para la animacion del slider
function CambiarImagen (){
	var dimensiones = $("#contenedorImagenes").width();
	$("#contenedorImagenes img").css({left: -dimensiones+"%"}).attr("src", "assets/img/"+slider[siguiente]);
	$("#contenedorImagenes img").animate({left: "+="+dimensiones});

	//despues de que cambie la img, el contador suma 1
	siguiente = siguiente+1;

	//cuando el contador sea mayor o igual a la longitud del array, vuelve a empezar
	if (siguiente >= slider.length)
	{
		siguiente = 0;
	}

	//creo una variable con el tiempo de transicion
	var transicion= 3000; //3 segundos

	//uso un timer y le paso como parametro la funcion y el tiempo de transicion, para que cada 3 segundos haga la funcion
	setTimeout("CambiarImagen()",transicion);
}

//cuando la pagina este lista...
$(function(){
	//... se va a ejecutar la funcion que cambia la img con la animacion
	CambiarImagen();

});