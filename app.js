window.onload = function () {
  const display = document.getElementById('display');

  if (!display) {
    console.error("Display not found!");
    return;
  }

  // Append values to the display
  window.appendToDisplay = function(value) {
    display.value += value;
  };

  // Clear the display
  window.clearDisplay = function() {
    display.value = '';
  };

  // Delete the last character
  window.deleteChar = function() {
    display.value = display.value.slice(0, -1);
  };

  // Calculate the result
  window.calculateResult = function() {
    try {
      display.value = eval(display.value);
    } catch (error) {
      alert('Invalid calculation');
      clearDisplay();
    }
  };

  // Scientific functions
  window.calculateScientific = function(func) {
    try {
      const value = parseFloat(display.value);
      if (isNaN(value)) {
        alert('Invalid input');
        return;
      }

      switch (func) {
        case 'sin': display.value = Math.sin(value * Math.PI / 180); break;
        case 'cos': display.value = Math.cos(value * Math.PI / 180); break;
        case 'tan': display.value = Math.tan(value * Math.PI / 180); break;
        case 'asin': display.value = Math.asin(value) * 180 / Math.PI; break;
        case 'acos': display.value = Math.acos(value) * 180 / Math.PI; break;
        case 'atan': display.value = Math.atan(value) * 180 / Math.PI; break;
        case 'log': display.value = Math.log10(value); break;
        case 'ln': display.value = Math.log(value); break;
        case 'sqrt': display.value = Math.sqrt(value); break;
        case 'exp': display.value = Math.exp(value); break;
        case 'pow': display.value = Math.pow(value, 2); break;
        case 'fact':
          let result = 1;
          for (let i = 2; i <= value; i++) result *= i;
          display.value = result;
          break;
        case 'pi': display.value = Math.PI; break;
        case 'e': display.value = Math.E; break;
        default: alert('Function not implemented');
      }
    } catch (error) {
      alert('Error: ' + error.message);
    }
  };

  console.log("Scientific Calculator is ready!");
};
