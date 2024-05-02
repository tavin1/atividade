document.getElementById("alterarBtn").addEventListener("click", function() {
    var elementos = document.getElementsByClassName("minhaClasse");
    for (var i = 0; i < elementos.length; i++) {
      elementos[i].textContent = "Esse tem a CLASSe";
    }
  });

  
  