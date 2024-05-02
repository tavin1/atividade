document.getElementById("somarBtn").addEventListener("click", function() {
    var num1 = parseInt(document.getElementById("numero1").value);
    var num2 = parseInt(document.getElementById("numero2").value);
    var resultado = num1 + num2;
    alert("A soma é: " + resultado);
  });
  