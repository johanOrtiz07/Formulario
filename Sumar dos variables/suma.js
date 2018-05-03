var n1;
var n2;
var resultado=0;

function suma(){

    var n1 = document.getElementById('numero1').value;
    var n2 = document.getElementById('numero2').value;
    var resultado= parseInt(n1) + parseInt(n2);
    //alert("la suma es :"+resultado)
    resultado = document.getElementById("resultado").value = resultado;
    
}
function resta(){
    var n1 = document.getElementById('numero1').value;
    var n2 = document.getElementById('numero2').value;
    var resultado= parseInt(n1) - parseInt(n2);
  //  alert("la suma es :"+resultado)
    resultado = document.getElementById("resultado").value = resultado;
       


}
    function division(){
    var n1 = document.getElementById('numero1').value;
    var n2 = document.getElementById('numero2').value;
    var resultado= parseInt(n1) / parseInt(n2);
    //alert("la suma es :"+resultado)
        resultado = document.getElementById("resultado").value = resultado;
        
    }

        function multiplicacion(){
    var n1 = document.getElementById('numero1').value;
    var n2 = document.getElementById('numero2').value;
    var resultado= parseInt(n1) * parseInt(n2);
    //alert("la suma es :"+resultado)
            resultado = document.getElementById("resultado").value = resultado;
        }
