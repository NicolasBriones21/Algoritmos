let tareas=parseInt(prompt("¿Cuantas tareas entregaste?"));

if (tareas>=0&&tareas<=6){
    alert("Failed");
}
else if (tareas>=7&&tareas<9) {
    alert("Insufficient");
} 
else if (tareas>=9&&tareas<=14) {
    alert("Good");
} 
else if (tareas==15) {
    alert("Excellent");
} 
else {
alert("Error, dato no valido"); }
