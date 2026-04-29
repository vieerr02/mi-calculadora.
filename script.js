        console.log ("¡Hola! El Motor de mi app Funciona.");



 // 1. Atrapamos los elementos de la pantalla
const boton = document.getElementById("botonCalcular");
const inputMeta = document.getElementById("meta");
const inputGastos = document.getElementById("gastos"); // El nuevo cuadro
const textoResultado = document.getElementById("resultado");

// 2. La lógica del cálculo
boton.addEventListener("click", function() {
    // Obtenemos los valores de los cuadros
    const metaMensual = parseFloat(inputMeta.value) || 0;
    const gastosMensuales = parseFloat(inputGastos.value) || 0;
    
    // Nueva fórmula: Sumamos los gastos a la meta para saber cuánto cobrar en total
    // O restamos gastos si lo que quieres es saber cuánto te queda libre.
    // En este caso, para "ganar" X cantidad libre, debes ingresar: (Meta + Gastos) / 30
    const totalNecesario = (metaMensual + gastosMensuales) / 30;
    
    // 3. Mostramos el resultado final
    textoResultado.innerText = "Para quedar libre con $" + metaMensual + ", debes ingresar $" + totalNecesario.toFixed(2) + " por día.";
});
