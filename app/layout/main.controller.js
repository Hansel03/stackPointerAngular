
angular
        .module('app')
        .controller('MainController', MainController);

MainController.$inject = [];

function MainController() {
   var vm = this;
   
   vm.variable = "Bienvenido al inicio";
   
}