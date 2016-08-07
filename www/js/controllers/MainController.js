app.controller('MainController', ['$scope', function($scope) { 
	$scope.titulo = 'Electronic Porotos';
	$scope.logo = 'img/bean.png';
	$scope.presentacion = 'Esta aplicación está hecha con AngularJS y funciona enteramente del lado del cliente.';
	$scope.credito = 'Desarrollada por Gonzalo M. Filón.';
	$scope.vistaInicio = false;
	$scope.vistaJugadores = true;
	$scope.vistaPartida = true;
	$scope.jugadores = [];
	$scope.partida = 
	{
		usuario : '',
		jugadores : 1,
		puntajeInicial : 0
	};
	$scope.ingresar = function () {
		for (var i = 1 ; i <= this.partida.jugadores ; i++){
			var j = {
					id : i,
					nombre : '',
					puntaje : this.partida.puntajeInicial
				};
			this.jugadores.push(j);
		}
		
		this.vistaInicio = true;
		this.vistaJugadores = false;
	};
	$scope.ingresarJugadores = function () {
		this.vistaJugadores = true;
		this.vistaPartida = false;
	};
	$scope.inicio = function () {
		$scope.partida = 
			{
				usuario : '',
				jugadores : 1,
				puntajeInicial : 0
			};
		$scope.jugadores = [];
		this.vistaPartida = true;
		this.vistaJugadores = true;
		this.vistaInicio = false;
	};
	$scope.sumarUno = function (indice) {
		this.jugadores[indice-1].puntaje += 1; 
	};
	$scope.restarUno = function (indice) {
		this.jugadores[indice-1].puntaje -= 1; 
	};
	$scope.sumarCinco = function (indice) {
		this.jugadores[indice-1].puntaje += 5; 
	};
	$scope.restarCinco = function (indice) {
		this.jugadores[indice-1].puntaje -= 5; 
	};

}]);