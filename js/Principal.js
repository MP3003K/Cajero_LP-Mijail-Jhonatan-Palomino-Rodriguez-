var num = document.getElementById("datos");
var n_vista= parseInt("1");
function add(n){
   if(num.value<11111111){
 var x= num.value;
    num.value=x+n;

   }
}
function login(){
    var pass= document.getElementById("datos").value;
    if(pass=="12345678"){
        document.getElementById("m1").style.display="none";
        document.getElementById("m2").style.display="block";
    n_vista++;
    }else{
        document.getElementById("mensaje").innerHTML="Contraseña incorrecta......."
    }
}
function cancel(){
    num.value="";
    document.getElementById("mensaje").innerHTML="";
}
function boton1(){
    if(n_vista==2){
        document.getElementById("m2").style.display="none";
        document.getElementById("m3").style.display="block";
    }
}