//Se asigna el valor al numero mayor
let mayor=0;
//se crea un ciclo for de 5 repeticiones
for (var i = 0; i<5; i++ ){
    //Se piden los datos
    let n1=parseInt(prompt("Ingresa numero"));
    //Se compara si el numero ingresado es mayor
    if(n1>mayor)
    {
         //Si es mayor, se guarda como el numero mayor
    mayor=n1;
    }
}
//Mensaje de numero mayor
alert("el numero mayor es "+ mayor);
