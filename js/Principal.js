var num = document.getElementById("datos");
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
    }else{
        document.getElementById("mensaje").innerHTML="Contraseña incorrecta......."
    }
}
function cancel(){
    num.value="";
    document.getElementById("mensaje").innerHTML="";
}