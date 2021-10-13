angular
	.module('prueba')
	//controlador
	.controller('prueba2Controller', prueba2Controller);
	
	prueba2Controller.$inject = ['$scope'];
	
	function prueba2Controller($scope){
		var prueba2 = this;
		
		prueba2.nombre = 'Ana';
	}