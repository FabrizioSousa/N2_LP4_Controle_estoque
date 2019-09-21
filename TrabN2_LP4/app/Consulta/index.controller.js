(function () {
    'use strict';

    angular
        .module('app')
        .controller('Consulta.IndexController', Controller);

    function Controller($window, Consulta, FlashService) {
        var vm = this;

        vm.Question = null;
        vm.saveQuestion = saveQuestion;
        
        vm.DeletarPorID = DeletarPorID;
        vm.ListQuestions = null
        initController();

        function initController() {
            // get current user
            Consulta.GetAll().then(function (questions) {
               
                vm.listquestions = questions;
                console.log(vm.listquestions);
            });
            
        }    
       

        function saveQuestion() {
            Consulta.Create(vm.Question)
                .then(function () {
                    FlashService.Success('Question created');
                })
                .catch(function (error) {
                    FlashService.Error(error);
                });
        }
        function DeletarPorID(ID) {
            console.log(ID);
            Consulta.Delete(ID)
            .then(function () {
                initController();
            })
            .catch(function (error) {
                FlashService.Error(error);
            });
        }

    
    }   
})();