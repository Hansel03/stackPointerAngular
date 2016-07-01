


angular
        .module('app')
        .service('GroupService', GroupService);


GroupService.$inject = ['$http','$q'];

function GroupService($http, $q){
    var service = {
        getAllGroups:getAllGroups,
        newGroup:newGroup
    };
    
    return service;
    
    
    function getAllGroups(){
         return $http.get('http://172.16.3.203:8080/LogCloud/CMMS/api/group/')
                .then(
                        function (response) {
                            console.log(response);
                            return response.data;
                        },
                        function (errResponse) {
                            return $q.reject(errResponse);
                        }
                );
    }
    
    function newGroup(json){
         return $http.post('http://172.16.3.203:8080/LogCloud/CMMS/api/group/new', json)
                .then(
                        function (response) {
                            return response.data;
                        },
                        function (errResponse) {
                            return $q.reject(errResponse);
                        }
                );
    }
    
    
    
}
