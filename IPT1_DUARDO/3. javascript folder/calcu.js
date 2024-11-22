const input = document.querySelector('input');
    let currentNumber = "";

    function clearScreen() {
      input.value = "";
      currentNumber = "";
    }

    function append(text) {
      currentNumber += text;
      input.value = currentNumber;
    }

    function equals() {
      try {
        var res = eval(currentNumber);  
        input.value = res;
        currentNumber = res.toString();  
      } catch (error) {
        console.error(error);
        input.value = "Error!";
        currentNumber = "";  
      }
    }
  