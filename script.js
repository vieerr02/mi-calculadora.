        console.log ("¡Hola! El Motor de mi app Funciona.");



    // 1. Atrapamos los elementos de la pantalla
const boton = document.getElementById("botonCalcular");
const inputMeta = document.getElementById("meta");
const inputGastos = document.getElementById("gastos");
const textoResultado = document.getElementById("resultado");

boton.addEventListener("click", function() {
    // Convertimos el texto a números reales
    const meta = parseFloat(inputMeta.value) || 0;
    const gastos = parseFloat(inputGastos.value) || 0;

    // Validación simple: Si no ponen meta, avisamos
    if (meta <= 0) {
        textoResultado.innerText = "⚠️ Por favor, ingresa una meta mayor a 0.";
        textoResultado.style.color = "red";
        return; 
    }

    // Cálculo: (Lo que quiero ganar + Lo que gasto) / 30 días
    const objetivoTotal = (meta + gastos) / 30;

    // Resultado final
    textoResultado.style.color = "#2c3e50";
    textoResultado.innerText = Para ganar $${meta} libres, debes ingresar $${objetivoTotal.toFixed(2)} por día.;
});