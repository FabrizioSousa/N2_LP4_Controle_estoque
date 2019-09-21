



(function ()  
{
    'use strict';

    angular
        .module('app')
        .controller('Estoque.IndexController', Controller);
       
    function Controller(Estoque, FlashService,UserService) {
  
        var vm = this;

        vm.GravaDados = GravaDados;
        // vm.question= question;
        // vm.question = null;
        vm.Limpar = Limpar;
        initController();

        function initController() {
            // get current user
            UserService.GetCurrent().then(function (user) {
                vm.user = user;
            });
        }


        function Limpar()
        {   
            for(var x = 0;x<document.getElementsByTagName("input").length;x++)
            {
                var a =  document.getElementsByTagName("input")[x];
                a.value="";
            }
            var textarea = document.getElementsByTagName("textarea")[0];
            textarea.value = "";
            // var a = document.getElementsByTagName("input")[0].value;
            // console.log(a);
        }



        function GravaDados()
        {
            // ok
            var Data_Escolhida = document.getElementById('Data').value;
            var Caracteristicas_Escolhida = document.getElementById('Carac').value;
           
            var Vlr_Margem_Calculado = vm.Vlr_Pago * 2;
            // console.log(Vlr_Margem_Calculado);
            // debugger;
            let ArraySalvar = {
                ID: vm.id,
                Data: Data_Escolhida,
                Tipo: vm.cbTipo,
                Marca: vm.Marca,
                Cor: vm.Cor,
                Tamanho: vm.Tamanho,
                Vlr_etiqueta: vm.Vlr_Etiqueta,
                Vlr_Pago: vm.Vlr_Pago,
                Vlr_Preco: vm.Vlr_Preco,
                Vlr_Margem: Vlr_Margem_Calculado,
                Caracteristicas: Caracteristicas_Escolhida
            }
        //    console.log(ArraySalvar);
           
           Estoque.SalvaDados(ArraySalvar)
           .then(function () {
               FlashService.Success('Pergunta salva com sucesso!');
           })
           .catch(function (error) {
               FlashService.Error(error);
           });
        }
              
        

        
         
        //     var pergunta = document.getElementById('pergunta').value;
         
          
        //    var a = document.createElement("a");
          
        //    a.setAttribute("name","a");
        //    a.setAttribute("class","list-group-item");
          
          
         
        //    a.innerHTML = pergunta;
    
        //    var table = document.getElementById("lista");
       
          
        //     table.appendChild(a);
            
        // } 

      

        // function DeletaPergunta()
        // {
          

        //   var x =document.getElementsByName("a")[0];
          
        //   x.remove();
          
        
       
         
           
         
         
    }
    
    


})();
