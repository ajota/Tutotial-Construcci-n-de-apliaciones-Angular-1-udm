angular
	.module('prueba', [])
	//controlador
	.controller('pruebaController', pruebaController)
	.controller('prueba2Controller', prueba2Controller);
	
	
	pruebaController.$inject = ['$scope'];
	prueba2Controller.$inject = ['$scope'];
	
	function prueba2Controller($scope){
		var prueba2 = this;
		
		prueba2.nombre = 'Ander';
		prueba2.email = 'ajota06@gmail.com';
	}
	
	function pruebaController($scope){
		var prueba = this;
		prueba.nombre = 'Anderson velez';
	}
	
	