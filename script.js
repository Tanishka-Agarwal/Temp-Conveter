
    function convertTemperature() {
      // Get input values and units
      var inputTemp = parseFloat(document.getElementById("inputTemp").value);
      var inputUnit = document.getElementById("inputUnit").value;
      var outputUnit = document.getElementById("outputUnit").value;
    
      // Perform temperature conversion
      var convertedTemp;
      if (inputUnit === "celsius" && outputUnit === "fahrenheit") {
        convertedTemp = (inputTemp * 9/5) + 32;
      } else if (inputUnit === "fahrenheit" && outputUnit === "celsius") {
        convertedTemp = (inputTemp - 32) * 5/9;
      } else {
        convertedTemp = inputTemp; // If the units are the same, no conversion needed
      }
    
      // Display the converted temperature
      document.getElementById("outputTemp").value = convertedTemp.toFixed(2);
    }
