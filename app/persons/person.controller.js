
angular
        .module('app')
        .controller('PersonController', PersonController);

PersonController.$inject = ['$scope', '$location', '$state'];

function PersonController($scope, $location, $state) {
   var vm = this;
   
   vm.variable = "Bienvenido a personas";
   vm.algo2 = algo2;
   
//   se deja el $scope por peticion de los asistentes NO USAR
   $scope.algo = function(){
        alert("Alerta");
        $state.go('person.detalle2');
   };
   
//   Recomendado
   function algo2(){
       alert("Alerta2");
       $state.go('person.detalle');
   }
   
   
   
}
