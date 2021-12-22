var jugador = prompt("Escoge piedra, papel o tijera");
var options = ["piedra", "papel", "tijera"];
var machine = options[Math.floor(Math.random() * 3)];

if (jugador == "papel" && machine == "piedra")
{
    console.log("ganaste");
}
else if (jugador == "piedra" && machine == "papel")
{
    console.log("ganaste");
}
else if (jugador == "tijeras" && machine == "papel")
{
    console.log("ganaste");
}
else if (jugador == machine)
{
    console.log("empatate")
}
else {
    console.log("perdiste")
}

