
angular
        .module('app')
        .controller('GroupController', GroupController);

GroupController.$inject = ['GroupService'];

function GroupController(GroupService) {
   var vm = this;
  
  vm.dataGroup = {};
  vm.createGroup = {};
  vm.getAll = getAll;
  vm.newGroup = newGroup;
  
  
  function getAll(){
      GroupService.getAllGroups().then(
                        function (data) {
                            vm.dataGroup = data;
                        }
                );
  }
    getAll();
    
    
    function newGroup(){
        var json = {};
        json.groupName = vm.createGroup.nombre;
        json.groupStatus = vm.createGroup.activo;
        
      GroupService.newGroup(json).then(
                        function () {
                            getAll();
                        }
                );
  }
  
  
  
   
}
