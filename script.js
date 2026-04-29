        console.log ("¡Hola! El Motor de mi app Funciona.");



   // 1. Convertimos el texto a números reales (Nota la F mayúscula)
  const meta = parseFloat(inputMeta.value) || 0;
  const gastos = parseFloat(inputGastos.value) || 0;

  // Validación simple
  if (meta <= 0) {
      textoResultado.innerText = "⚠️ Por favor, ingresa una meta mayor a 0.";
      textoResultado.style.color = "red";
      return;
  }

  // 2. Cálculo: Sumamos primero y luego dividimos
  const objetivoTotal = (meta + gastos) / 30;

  // 3. Resultado final (Usando el método de unión con + para evitar fallos de comillas)
  textoResultado.style.color = "#2c3e50";
  textoResultado.innerText = "Para ganar $" + meta + " libres, debes ingresar $" + objetivoTotal.toFixed(2) + " por día.";
