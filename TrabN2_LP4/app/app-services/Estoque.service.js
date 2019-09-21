(function () {
    'use strict';

    angular
        .module('app')
        .factory('Estoque', Service);

    function Service($http, $q) {
        var service = {};

        
        service.GetAll = GetAll;
        service.SalvaDados = SalvaDados; 
       
    
       
        console.log("Passou aqui");

        

        return service;


        function SalvaDados(ArrayParaSalvar) {
        
            return $http.post('/estoque/SalvarDados',ArrayParaSalvar).then(handleSuccess, handleError);
        }

        function GetAll() {
            return $http.get('/estoque/listar').then(handleSuccess, handleError);
        }


        // private functions

        function handleSuccess(res) {
            return res.data;
        }

        function handleError(res) {
            return $q.reject(res.data);
        }
    }

})();
